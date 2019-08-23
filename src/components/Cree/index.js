/**
 * Cree orthography utilities.
 */

"use strict";

import {sro2syllabics} from 'cree-sro-syllabics';

export const SRO_CIRCUMFLEX = 'Latn';
export const SRO_MACRON = 'Latn-x-macron';
export const SYLLABICS = 'Cans';

/**
 * Returns a transliteration function that converts SRO => some other
 * orthography.
 */
export function chooseTransliterator(bcp47) {
  if (!(bcp47 in BCP47_TO_TRANSLITERATOR)) {
    throw new Error(`Unknown format: ${bcp47}`);
  }
  return BCP47_TO_TRANSLITERATOR[bcp47];
}

const BCP47_TO_TRANSLITERATOR = {
  [SYLLABICS]: sro2syllabics,
  [SRO_CIRCUMFLEX]: function identity(text) {
    return text;
  },
  [SRO_MACRON]: function toMacrons(text) {
    return text.replace(/[êîôâ]/g, function (vowel) {
      return {ê: 'ē', î: 'ī', ô: 'ō', â: 'ā'}[vowel];
    });
  }
}

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
    if (bcp47 === SYLLABICS) {
      return sro2syllabics;
    } else if (bcp47 === SRO_CIRCUMFLEX) {
      return identity;
    } else if (bcp47 === SRO_MACRON) {
      return toMacrons;
    } else {
      throw new Error(`Unknown format: ${bcp47}`);
    }
}

function identity(t) {
  return t;
}

function toMacrons(t) {
  return t.replace(/[êîôâ]/g, function (vowel) {
    return {ê: 'ē', î: 'ī', ô: 'ō', â: 'ā'}[vowel];
  });
}

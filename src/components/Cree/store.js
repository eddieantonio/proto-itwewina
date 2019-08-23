import {writable} from 'svelte/store';

export const SRO_CIRCUMFLEX = 'Latn';
export const SRO_MACRON = 'Latn-x-macron';
export const SYLLABICS = 'Cans';

export const orthography = writable(SRO_CIRCUMFLEX);

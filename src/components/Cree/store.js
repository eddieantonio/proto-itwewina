import {writable} from 'svelte/store';

export const ORTHOGRAPHIES = [
  { name: 'SRO (Circumflexes)', bcp47: 'Latn' },
  { name: 'SRO (Macrons)', bcp47: 'Latn-x-macron' },
  { name: 'Syllabics', bcp47: 'Cans' },
];

export const orthography = writable(ORTHOGRAPHIES[0].bcp47);

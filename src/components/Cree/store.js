import {writable} from 'svelte/store';
import {SRO_CIRCUMFLEX} from './';

/**
 * Stores the application's currently active orthography.
 */
export const orthography = writable(SRO_CIRCUMFLEX);

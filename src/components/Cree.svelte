<script>
  import {onDestroy} from 'svelte';

  import {sro2syllabics} from 'cree-sro-syllabics';
  import {orthography, SRO_MACRON, SRO_CIRCUMFLEX, SYLLABICS} from './Cree/store';

  export let sro;

  let transliterate = sro2syllabics;
  const unsubscribe = orthography.subscribe(bcp47 => {
    if (bcp47 === SYLLABICS) {
      transliterate = sro2syllabics;
    } else if (bcp47 === SRO_CIRCUMFLEX) {
      transliterate = identity;
    } else if (bcp47 === SRO_MACRON) {
      transliterate = toMacrons;
    } else {
      throw new Error(`Unknown format: ${bcp47}`);
    }
  });
  onDestroy(unsubscribe);

  $: transliterated = transliterate(sro);

  function identity(t) {
    return t;
  }

  function toMacrons(t) {
    return t.replace(/[êîôâ]/g, function (vowel) {
      return {ê: 'ē', î: 'ī', ô: 'ō', â: 'ā'}[vowel];
    });
  }
</script>

<span lang="cr">{transliterated}</span>

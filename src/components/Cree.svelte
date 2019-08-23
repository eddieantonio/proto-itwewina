<script>
  import {onDestroy} from 'svelte';

  import {chooseTransliterator} from './Cree';
  import {orthography} from './Cree/store';

  export let sro;

  let transliterate;
  const unsubscribe = orthography.subscribe(bcp47 => {
    transliterate = chooseTransliterator(bcp47);
  });
  onDestroy(unsubscribe);

  $: transliterated = transliterate(sro);
</script>

<span lang="cr">{transliterated}</span>

<script>
  import {onDestroy} from 'svelte';

  import {chooseTransliterator} from './Cree';
  import {orthography} from './Cree/store';

  export let sro;
  let transliterate;

  $: transliterate = chooseTransliterator($orthography); 
  $: text = transliterate(sro);
</script>

<span lang="cr">{text}</span>

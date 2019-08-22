<script>
  import {sro2syllabics} from 'cree-sro-syllabics';

  export let text;

  $: transliterated = sro2syllabics(text);
</script>

<span lang="cr">{transliterated}</span>

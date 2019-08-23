<!--

This component provides radio buttons to switch the application's currently
active orthography.
-->
<script>
  import {SRO_MACRON, SRO_CIRCUMFLEX, SYLLABICS} from './Cree';
  import {orthography} from './Cree/store';

  let choice = SRO_CIRCUMFLEX;

  $: orthography.set(choice);
</script>


<fieldset>
  <legend>Writing system</legend>

  <label><input type=radio bind:group={choice} value={SRO_CIRCUMFLEX}> SRO (êîôâ)</label>
  <label><input type=radio bind:group={choice} value={SRO_MACRON}> SRO (ēīōā)</label>
  <label><input type=radio bind:group={choice} value={SYLLABICS}> Syllabics</label>
</fieldset>

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

<fieldset class="menu__category">
  <legend class="menu__caption"> Show Cree words in </legend>

  <label class="menu-choice">
    <input class="menu-choice__input" type="radio" bind:group={choice} value={SRO_CIRCUMFLEX}>
    <span class="menu-choice__label"> SRO (êîôâ) </span>
  </label>

  <label class="menu-choice">
    <input class="menu-choice__input" type="radio" bind:group={choice} value={SRO_MACRON}>
    <span class="menu-choice__label"> SRO (ēīōā) </span>
  </label>

  <label class="menu-choice">
    <input class="menu-choice__input" type="radio" bind:group={choice} value={SYLLABICS}>
    <span class="menu-choice__label"> Syllabics (ᒐᐦᑭᐯᐦᐃᑲᓇ) </span>
  </label>
</fieldset>

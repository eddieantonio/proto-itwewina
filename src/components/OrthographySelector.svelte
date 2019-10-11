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

<section class="menu__category" aria-labelledby="language-selector__orthography">
  <h2 class="menu__caption" id="language-selector__language"> Show Cree words in </h2>
  <ul class="menu__choices">
    <li class="menu-choice" class:menu-choice--selected="{choice === SRO_CIRCUMFLEX}">
      <a href="?o={SRO_CIRCUMFLEX}" on:click|preventDefault={() => choice = SRO_CIRCUMFLEX} class="menu-choice__label"> SRO (êîôâ) </a>
    </li>
    <li class="menu-choice" class:menu-choice--selected="{choice === SRO_MACRON}">
      <a href="?o={SRO_MACRON}" on:click|preventDefault={() => choice = SRO_MACRON} class="menu-choice__label"> SRO (ēīōā) </a>
    </li>
    <li class="menu-choice" class:menu-choice--selected="{choice === SYLLABICS}">
      <a href="?o={SYLLABICS}" on:click|preventDefault={() => choice = SYLLABICS} class="menu-choice__label"> Syllabics (ᒐᐦᑭᐯᐦᐃᑲᓇ) </a>
    </li>
  </ul>
</section>

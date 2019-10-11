<!--

This component provides radio buttons to switch the application's currently
active orthography.

-->
<script>
  import {SRO_MACRON, SRO_CIRCUMFLEX, SYLLABICS} from './Cree';
  import {orthography} from './Cree/store';
  let choice = SRO_CIRCUMFLEX;
  const choices = [
    // ID            Label
    [SRO_CIRCUMFLEX, 'SRO (êîôâ)'],
    [SRO_MACRON, 'SRO (ēīōā)'],
    [SYLLABICS, 'Syllabics (ᒐᐦᑭᐯᐦᐃᑲᓇ)'],
  ];
  $: orthography.set(choice);
</script>

<section class="menu__category" aria-labelledby="language-selector__orthography">
  <h2 class="menu__caption" id="language-selector__orthography"> Show Cree words in </h2>
  <ul class="menu__choices">
    {#each choices as [id, label]}
      <li class="menu-choice" class:menu-choice--selected="{choice === id}">
        <a href="?o={id}" on:click|preventDefault={() => choice = id} class="menu-choice__label">{label}</a>
      </li>
    {/each}
  </ul>
</section>

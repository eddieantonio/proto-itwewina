<script>
  import Cree from '../components/Cree.svelte';
</script>

<div class="top-bar app__header">
  <header class="branding top-bar__heading ">
    <a href="/">
      <h1 class="branding__heading branding__title"><Cree sro="itwêwina" /></h1>
      <p class="branding__heading branding__subtitle">Plains Cree Dictionary</p>
    </a>
  </header>

  <nav class="top-bar__nav">
    <details class="toggle-box toggle-box--with-menu">
      <summary class="toggle-box__toggle">
        English (êîôâ)
      </summary>
      <div class="menu toggle-box__menu">
        <fieldset class="menu__category">
          <legend class="menu__caption"> Language </legend>

          <label class="menu-choice">
            <input class="menu-choice__input" type="radio" name="lang" value="en" checked>
            <span class="menu-choice__label"> English </span>
          </label>

          <label class="menu-choice">
            <input class="menu-choice__input" type="radio" name="lang" value="cr">
            <span class="menu-choice__label"> Cree/<Cree sro="nêhiyawêwin"/> </span>
          </label>
        </fieldset>

        <fieldset class="menu__category">
          <legend class="menu__caption"> Show Cree words in </legend>

          <label class="menu-choice">
            <input class="menu-choice__input" type="radio" name="orth" value="Latn" checked>
            <span class="menu-choice__label"> SRO (êîôâ) </span>
          </label>

          <label class="menu-choice">
            <input class="menu-choice__input" type="radio" name="orth" value="Latn-x-macron">
            <span class="menu-choice__label"> SRO (ēīōā) </span>
          </label>

          <label class="menu-choice">
            <input class="menu-choice__input" type="radio" name="orth" value="Latn">
            <span class="menu-choice__label"> Syllabics (ᒐᐦᑭᐯᐦᐃᑲᓇ) </span>
          </label>
        </fieldset>

      </div>
    </details>
  </nav>
</div>

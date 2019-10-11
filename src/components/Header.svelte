<script>
  import Cree from './Cree.svelte';
  import OrthographySelector from './OrthographySelector.svelte';
</script>

<div class="top-bar app__header">
  <header class="branding top-bar__heading ">
    <a href="/">
      <h1 class="branding__heading branding__title"><Cree sro="itwêwina" /></h1>
      <p class="branding__heading branding__subtitle">Plains Cree Dictionary</p>
    </a>
  </header>

  <nav class="top-bar__nav">
    <details class="toggle-box toggle-box--with-menu" open>
      <summary id="language-button" class="toggle-box__toggle" aria-haspopup="menu" role="button">
        English (êîôâ)
      </summary>
      <div class="menu toggle-box__menu" role="menu" aria-labelledby="language-button">
        <section class="menu__category" aria-labelledby="language-selector__language">
          <h2 class="menu__caption" id="language-selector__language"> Language </h2>
          <ul class="menu__choices">
            <li class="menu-choice menu-choice--selected" aria-current="true">
              <span class="menu-choice__label"> English </span>
            </li>
            <li class="menu-choice">
              <span class="menu-choice__label"> Cree/<Cree sro="nêhiyawêwin"/> </span>
            </li>
          </ul>
        </section>

        <OrthographySelector />
      </div>
    </details>
  </nav>
</div>

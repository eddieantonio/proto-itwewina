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
    <details class="toggle-box toggle-box--with-menu">
      <summary id="language-selector__button" class="toggle-box__toggle"
      aria-haspopup="menu" role="button" aria-label="Select language and writing system">
        English (êîôâ)
      </summary>
      <div class="menu toggle-box__menu" role="menu" aria-labelledby="language-selector__button">
        <section class="menu__category" aria-labelledby="language-selector__language">
          <h2 class="menu__caption" id="language-selector__language"> Language </h2>
          <ul class="menu__choices">
            <li role="menuitem" class="menu-choice menu-choice--selected">
              <a href="?hl=en" class="menu-choice__label" aria-current="true">English</a>
            </li>
            <li role="menuitem" class="menu-choice">
              <a href="?hl=crk" class="menu-choice__label">Cree/<Cree sro="nêhiyawêwin"/></a>
            </li>
          </ul>
        </section>

        <OrthographySelector />
      </div>
    </details>
  </nav>
</div>

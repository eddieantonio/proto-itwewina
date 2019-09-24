<nav class="search application__panel">
  <form class="search__search-bar search-bar" action="search" method="GET">
    <label class="search-bar__label" for="search">Search</label>
    <!-- Should autofocus on homepage only! -->
     <!-- Apparently Safari decides to use its own styling NO MATTER WHAT for
      input[type="search"], so... we use input[type="text"] instead!

      https://css-tricks.com/webkit-html5-search-inputs/#article-header-id-0
     -->
    <input id="search" class="search-bar__input"
           type="text" name="q" required
           placeholder="Search in Cree or English">
    <button class="search-bar__button" type="submit">
      <img src="img/fa/search.svg" alt="Search">
    </button>
  </form>

  <details class="search__advanced toggle-box">
    <summary class="toggle-box__toggle">
      Advanced search
    </summary>
    TODO: advanced search.
  </details>
</nav>

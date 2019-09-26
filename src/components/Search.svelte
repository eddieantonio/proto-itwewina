<nav class="search app__pane">
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

  <details class="search__advanced toggle-box toggle-box--large toggle-box--link-like">
    <summary class="toggle-box__toggle">
      Advanced search
    </summary>
    <div class="menu menu--wide toggle-box__menu">
      <fieldset class="menu__category">
        <legend class="menu__caption"> Dictionary Source </legend>

        <label class="menu-choice">
          <input class="menu-choice__check" type="checkbox" name="lang" value="en" checked>
          <div class="menu-choice__label">
            <h2> Include Cree : Words (<span class="cite-dict">CW</span>) </h2>
            <p class="reference"> Wolvengery, A. (2011). <i>Cree: Words.</i>
            Regina: University of Regina Press.
            </p>
          </div>
        </label>

        <label class="menu-choice">
          <input class="menu-choice__check" type="checkbox" name="lang" value="en" checked>
          <div class="menu-choice__label">
            <h2> Include Maskwacîs : Words (<span class="cite-dict">MD</span>) </h2>
            <p class="reference"> <i>Maskwacîs Dictionary of Cree
            Words/Nehiyaw Pîkiskweninisa.</i> (2009). Maskwacîs: Maskwachees
            Cultural College.  </p>
          </div>
        </label>

        <label class="menu-choice">
          <input class="menu-choice__check" type="checkbox" name="lang" value="en" checked>
          <div class="menu-choice__label">
            <h2> Include Alberta Elders' Cree Dictionary (<span class="cite-dict">EC</span>) </h2>
            <p class="reference"> LeClaire, N., &amp; Cardinal, G. (2002).
            <i>Alberta Elders' Cree Dictionary/alperta ohci kehtehayak nehiyaw
            otwestamâkewasinahikan.</i> E. Waugh (Ed.). Edmonton: The
            University of Alberta Press.
            </p>
          </div>
        </label>

      </fieldset>
    </div>
  </details>
</nav>

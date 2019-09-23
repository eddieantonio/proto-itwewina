<script>
  import Cree from '../components/Cree.svelte';
  import CiteDict from '../components/CiteDict.svelte';
</script>

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
  <details class="search__advanced">
    <summary>
      Advanced search
    </summary>
    TODO: advanced search.
  </details>
</nav>

<main class="application__content application__panel">
  <article class="definition">
    <header class="definition__header">
      <h1 class="definition-title">
        <dfn class="definition-title__word"><Cree sro="minôs" /></dfn>
        <span class="definition-title__pos">(Noun)</span></h1>
    </header>

    <section class="definition__recordings">
      TODO
    </section>

    <section class="definition__meanings">
      <ol class="meanings">
        <li class="meanings__meaning">cat <CiteDict source="CW"/> <CiteDict source="MD"/></li>
      </ol>
    </section>

    <section class="definition__paradigm paradigm">
      <table class="paradigm__table">
        <tbody>
          <tr> <th class="paradigm__panel-description" colspan="2"> Basic </th> </tr>

          <tr> <td>One</td>       <td><Cree sro="minôs" /></td> </tr>
          <tr> <td>Many</td>      <td><Cree sro="minôsak" /></td> </tr>
          <tr> <td>Further</td>   <td><Cree sro="minôsa" /></td> </tr>
        </tbody>
      </table>

      <button class="paradigm__more-button"> more </button>
    </section>
  </article>
</main>


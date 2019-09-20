<script>
  import Cree from './components/Cree.svelte';
  import CiteDict from './components/CiteDict.svelte';
</script>

<header class="application-header">
  <a href="/">
    <h1 class="application-header__heading application-title"><Cree sro="itwêwina" /></h1>
    <h2 class="application-header__heading application-subtitle">Plains Cree Dictionary</h2>
  </a>
</header>

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
           autofocus
           placeholder="Search in Cree or English">
    <button class="search-bar__button" type="submit">
      🔍 <!-- TODO: replace with font awesome images. -->
    </button>
  </form>
</nav>

<main class="application__content application__panel">
  <article>
    <header>
      <h1><dfn><Cree sro="minôs" /></dfn> <span class="part-of-speech">(Noun)</span></h1>
    </header>
    <section class="translations">
      <ol>
        <li>cat <CiteDict source="CW"/> <CiteDict source="MD"/></li>
      </ol>
    </section>

    <section class="paradigm">
      <table>
        <tbody>
          <tr> <th colspan="2"> <b>Basic forms</b> (ni-/ki- word) </th> </tr>

          <tr> <td>One</td>       <td><Cree sro="minôs" /></td> </tr>
          <tr> <td>Many</td>      <td><Cree sro="minôsak" /></td> </tr>
          <tr> <td>Further</td>   <td><Cree sro="minôsa" /></td> </tr>
        </tbody>
      </table>

      <a href="more">More</a>
    </section>
  </article>
</main>

<footer class="application-footer">
  <a class="application-footer__logo" href="https://www.maskwacised.ca/"><img src="img/mesc-logo.svg" alt="MESC"></a>
  <a class="application-footer__logo" href="https://altlab.ualberta.ca/"><img src="img/uofa-logo.svg" alt="University of Alberta"></a>
  <a class="application-footer__logo" href="http://fnuniv.ca/"><img src="img/fnu-logo.png" alt="FNU"></a>
</footer>

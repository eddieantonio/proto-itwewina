<script>
  import Cree from './components/Cree.svelte';
  import CiteDict from './components/CiteDict.svelte';
</script>

<header class="application-header">
  <h1 class="application-header__heading application-title"><Cree sro="itwêwina" /></h1>
  <h2 class="application-header__heading application-subtitle">Plains Cree Dictionary</h2>
</header>

<nav>
  <form action="search" method="GET">
    <input type="search" placeholder="Search for a word in Cree or English">
  </form>
</nav>

<main>
  <article>
    <header>
      <h1><dfn><Cree sro="itwêw" /></dfn> <span class="part-of-speech">(Noun)</span></h1>
    </header>
    <section class="translations">
      <ol>
        <li>goose <CiteDict source="CW"/> <CiteDict source="MD"/></li>
      </ol>
    </section>

    <section class="paradigm">
      <table>
        <tbody>
          <tr> <th colspan="2"> <b>Basic forms</b> (ni-/ki- word) </th> </tr>

          <tr> <td>One</td>                       <td><Cree sro="nititwân" /></td> </tr>
          <tr> <td>Many</td>                     <td><Cree sro="kititwân" /></td> </tr>
          <tr> <td>Further</td>                    <td><Cree sro="itwêw" /></td> </tr>
        </tbody>
      </table>

      <a href="more">More</a>
    </section>
  </article>
</main>

<footer>
  <a href="https://www.maskwacised.ca/"><img src="mesc-logo.png" alt="MESC"></a>
  <a href="https://altlab.ualberta.ca/"><img src="uofa-logo.png" alt="University of Alberta"></a>
  <a href="http://fnuniv.ca/"><img src="uofa-logo.png" alt="FNU"></a>
</footer>

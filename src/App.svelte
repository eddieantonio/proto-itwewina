<script>
  import Cree from './components/Cree.svelte';
  import OrthographySelector from './components/OrthographySelector.svelte';
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
    <dl>
      <dt><dfn><Cree sro="itwêw" /></dfn> (Noun)</dt>
      <dd>
        <section class="recordings">
          <button class="play-audio-button">▶️</button>
          <audio preload="none">
             <source src="https://sapir.artsrn.ualberta.ca/validation/recording/29444265281262d0d7e40e05b52c1c84cfda609bed83e6fa7cc07952045a2f61.m4a">
          </audio>
            “<Cree sro="minôs" />” (Harley Simon, Maskwacis)
        </section>

        <section class="translations">
          <ol>
            <li>He says <CiteDict source="MD"/></li>
            <li>s/he says so, s/he says thus, s/he calls (it) so; it has such a meaning. <CiteDict source="CW"/></li>
          </ol>
        </section>

        <section class="paradigm">
          <table>
            <tbody>
              <tr> <th colspan="2"> <b>Basic forms</b> (ni-/ki- word) </th> </tr>

              <tr> <td>I</td>                       <td><Cree sro="nititwân" /></td> </tr>
              <tr> <td>You</td>                     <td><Cree sro="kititwân" /></td> </tr>
              <tr> <td>S/he</td>                    <td><Cree sro="itwêw" /></td> </tr>
              <tr> <td>We</td>                      <td><Cree sro="nititwânân" /></td> </tr>
              <tr> <td rowspan="2">You and We</td>  <td><Cree sro="kititwânaw" /> or</td> </tr>
              <tr>                                  <td><Cree sro="kititwânânaw" /></td> </tr>
              <tr> <td>You (all)</td>               <td><Cree sro="kititwânâwâw" /></td> </tr>

              <tr> <th colspan="2"> <b>Basic forms</b> (ê-/kâ- word) </th> </tr>

              <tr> <td>I</td>                       <td><Cree sro="ê-itwêyân" /></td> </tr>
              <tr> <td>You</td>                     <td><Cree sro="ê-itwêyan" /></td> </tr>
              <tr> <td>S/he</td>                    <td><Cree sro="ê-itwêt" /></td> </tr>
              <tr> <td>We</td>                      <td><Cree sro="ê-itwêyâhk" /></td> </tr>
              <tr> <td>You and We</td>              <td><Cree sro="ê-itwêyahk" /></td> </tr>
              <tr> <td>You (all)</td>               <td><Cree sro="ê-itwêyêk" /></td> </tr>
            </tbody>
          </table>

          <a href="more">More</a>
        </section>

        <section>
          <p><a href="similar-to">View similar words</a></p>
        </section>
      </dd>
    </dl>
  </article>

  <aside>
    <OrthographySelector/>
  </aside>
</main>

<footer>
  <a href="https://www.maskwacised.ca/"><img src="mesc-logo.png" alt="MESC"></a>
  <a href="https://altlab.ualberta.ca/"><img src="uofa-logo.png" alt="University of Alberta"></a>
  <a href="http://fnuniv.ca/"><img src="uofa-logo.png" alt="FNU"></a>
</footer>

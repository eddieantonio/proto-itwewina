<script>
  import Cree from './components/Cree.svelte';
  import OrthographySelector from './components/OrthographySelector.svelte';
</script>

<header>
  <h1><Cree sro="itwêwina" /></h1>
  <h2>Plains Cree Dictionary</h2>
</header>

<nav>
  <OrthographySelector/>
</nav>

<main>
  <article>
    <dl>
      <dt><dfn><Cree sro="itwêw" /></dfn> (Noun)</dt>
      <dd>
        <ol>
          <li>He says <cite>MD</cite></li>
          <li>s/he says so, s/he says thus, s/he calls (it) so; it has such a meaning. <cite>CW</cite></li>
        </ol>

        <section>
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
</main>

<footer>
  <a href="https://www.maskwacised.ca/"><img src="mesc-logo.png" alt="MESC"></a>
  <a href="https://altlab.ualberta.ca/"><img src="uofa-logo.png" alt="University of Alberta"></a>
  <a href="http://fnuniv.ca/"><img src="uofa-logo.png" alt="FNU"></a>
</footer>


<style>
td[rowspan] {
  vertical-align: top;
}
</style>

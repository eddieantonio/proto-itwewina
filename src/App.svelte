<script>
  import Cree from './Cree.svelte';
</script>

<header>
  <h1><Cree text="itwêwina" /></h1>
  <h2>Plains Cree Dictionary</h2>
</header>

<nav>
  <form action="search" method="GET">
    <input type="search" placeholder="Search...">
  </form>
</nav>

<main>
  <article>
    <dl>
      <dt><dfn><Cree text="itwêw" /></dfn> (Noun)</dt>
      <dd>
        <ol>
          <li>He says <cite>MD</cite></li>
          <li>s/he says so, s/he says thus, s/he calls (it) so; it has such a
          meaning. <cite>CW</cite></li>
        </ol>

        <section>
          <table>
            <tbody>
              <tr> <th colspan="2"> <b>Basic forms</b> (ni-/ki- word) </th> </tr>

              <tr> <td>I</td> <td><Cree text="nititwân" /></td> </tr>
              <tr> <td>You</td> <td><Cree text="kititwân" /></td> </tr>
              <tr> <td>S/he</td> <td><Cree text="itwêw" /></td> </tr>
              <tr> <td>We</td> <td><Cree text="nititwânân" /></td> </tr>
              <tr> <td rowspan="2">You and We</td> <td><Cree text="kititwânaw" /> or</td> </tr>
              <tr>                                 <td><Cree text="kititwânânaw" /></td> </tr>
              <tr> <td>You (all)</td> <td><Cree text="kititwânânâw" /></td> </tr>

              <tr> <th colspan="2"> <b>Basic forms</b> (ê-/kâ- word) </th> </tr>

              <tr> <td>I</td> <td><Cree text="ê-itwêyân" /></td> </tr>
              <tr> <td>You</td> <td><Cree text="ê-itwêyan" /></td> </tr>
              <tr> <td>S/he</td> <td><Cree text="ê-itwêt" /></td> </tr>
              <tr> <td>We</td> <td><Cree text="ê-itwêyâhk" /></td> </tr>
              <tr> <td>You and We</td> <td><span><Cree text="ê-itwêyahk" /></span></td> </tr>
              <tr> <td>You (all)</td> <td><Cree text="ê-itwêyêk" /></td> </tr>
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

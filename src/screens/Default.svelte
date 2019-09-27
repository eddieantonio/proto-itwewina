<script>
  import Cree from '../components/Cree.svelte';
  import CiteDict from '../components/CiteDict.svelte';
</script>

<svelte:head>
  <title>minôs — itwêwina: the online Cree dictionary</title>
</svelte:head>

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

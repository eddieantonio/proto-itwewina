<script>
  import Cree from '../components/Cree.svelte';
  import CiteDict from '../components/CiteDict.svelte';

  let paradigm = [
    {label: 'One', wordform: 'mînos'},
    {label: 'Many',  wordform: 'minôsak'},
    {label: 'Further',  wordform: 'minôsa'},
  ];
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

        {#each paradigm as {label, wordform}}
        <tr class="paradigm-row">
          <th scope="row" class="paradigm-row__label">{label}</th>
          <td class="paradigm-row__wordform"><Cree sro={wordform} /></td>
        </tr>
        {/each}

      </tbody>
    </table>

    <button class="paradigm__more-button"> show more </button>
  </section>
</article>

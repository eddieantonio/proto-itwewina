<script>
  import Cree from '../components/Cree.svelte';
  import CiteDict from '../components/CiteDict.svelte';

  export let wordform;
  export let pos;
  export let sources;
  export let meanings;
</script>

<li>
  <article class="definition definition__brief search-results__result">
    <header class="definition__header">
      <h2 class="definition-title">
        <dfn class="definition-title__word"><a href="/define/{wordform}"><Cree sro={wordform} /></a></dfn>
        <span class="definition-title__pos">({pos})</span>
      </h2>
    </header>

    <ol class="meanings">
      {#each meanings as {translation, sources }}
        <li class="meanings__meaning"> {translation}
          {#each sources as sourceID}
            <CiteDict source={sourceID}/>{" "}
          {/each}
        </li>
      {/each}
    </ol>
  </article>
</li>

<script>
  import Cree from '../components/Cree.svelte';
  import CiteDict from '../components/CiteDict.svelte';

  export let wordform;
  export let pos;
  export let sources;
  export let meanings;
</script>

<li class="search-results__result">
  <article class="definition box box--rounded">
    <header class="definition__header">
      <h2 class="definition-title definition-title--search-result">
        <dfn class="definition-title__word"><a href="/define/{wordform}"><Cree sro={wordform} /></a></dfn>
        <span class="definition-title__pos">({pos})</span>
      </h2>
    </header>

    <ol class="meanings meanings--search-result">
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

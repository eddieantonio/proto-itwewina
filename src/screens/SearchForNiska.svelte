<script>
  import Cree from '../components/Cree.svelte';
  import CiteDict from '../components/CiteDict.svelte';
</script>

<main class="application__content application__panel">
  <section class="search-results">
    <ol class="search-results__results">
      <li>
        <article class="definition definition__brief search-results__result">
          <header class="definition__header">
            <h2 class="definition-title">
              <dfn class="definition-title__word"><a href="/define/niska"><Cree sro="niska" /></a></dfn>
              <span class="definition-title__pos">(Noun)</span></h2>
          </header>

          <ol class="meanings">
            <li class="meanings__meaning"> goose <CiteDict source="CW"/> <CiteDict source="MD"/> </li>
          </ol>
        </article>
      </li>
    </ol>
  </section>
</main>

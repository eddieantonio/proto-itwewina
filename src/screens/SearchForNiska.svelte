<script>
  import SearchResult from '../components/SearchResult.svelte';
</script>

<main class="application__content application__panel">
  <section class="search-results">
    <ol class="search-results__results">
      <SearchResult wordform="niska" pos="Noun" meanings={[
        { translation: "goose", sources: ['CW', 'MD'] }
      ]}/>
      <SearchResult wordform="niskan" pos="Noun" meanings={[
        { translation: "my bone", sources: ['CW'] }
      ]}/>
      <SearchResult wordform="niskaskwa" pos="Noun" meanings={[
        { translation: "goose grass", sources: ['CW'] }
      ]}/>
    </ol>
  </section>
</main>

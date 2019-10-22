<script>
  import SearchResult from '../components/SearchResult.svelte';
</script>

<svelte:head>
  <title>🔎 ”see” — itwêwina: the online Cree dictionary</title>
</svelte:head>

<section class="search-results">
  <ol class="search-results__results">
    <SearchResult wordform="wâpamêw" pos="VTA" meanings={[
      { translation: "s/he sees s.o.", sources: ['CW'] }
    ]}/>
    <SearchResult wordform="wâpahtam" pos="VTI" meanings={[
      { translation: "s/he sees s.t.", sources: ['CW'] }
    ]}/>
    <SearchResult wordform="wâpamisow" pos="VAI" meanings={[
      { translation: "s/he sees him/himself", sources: ['CW'] }
    ]}/>
  </ol>
</section>


<script>
  import Cree from '../components/Cree.svelte';
  import CiteDict from '../components/CiteDict.svelte';
  import Navigation from '../components/Navigation.svelte';
</script>

<Navigation />

<main class="application__content application__panel dianebox">
  <article class="prose">
    <h1 class="prose__heading"><Cree sro="tânisi!" /></h1>

    <p> <Cree sro="itwêwina" /> is a Plains Cree Dictionary. </p>

    <p> Type any Cree word to find its English translation. You can search for
    short Cree words (e.g., <Cree sro="atim" />) or very long Cree words
    (e.g., <Cree sro="ê-mâh-misi-nâh-nôcihikocik" />).  Or you can type an
    English word and find its possible Cree translations.  You can write words
    in Cree using standard Roman orthography (SRO) (like <span
    lang="cr">acimosis</span>) or using syllabics (e.g., <span
    lang="cr">ᐊᒋᒧᓯᐢ</span>).</p>

    <p> <Cree sro="itwêwina" /> was made by the University of Alberta ALTLab,
    in collaboration with the First Nations University and Maskwacîs Education
    Schools Commission (MESC).  The dictionary entries are courtesy of Dr.
    Arok Wolvengrey and MESC. </p>
  </article>
</main>

<script>
  import Header from './components/Header.svelte';
  import Search from './components/Search.svelte';
  import Footer from './components/Footer.svelte';

  import DefaultScreen from './screens/Default.svelte';
  import HomeScreen from './screens/Home.svelte';
  import SearchForNiska from './screens/SearchForNiska.svelte';

  import {orthography} from './components/Cree/store';
  import {SRO_MACRON, SRO_CIRCUMFLEX, SYLLABICS} from './components/Cree';

  const screens = {
    'default': DefaultScreen,
    'home': HomeScreen,
    'niska': SearchForNiska,
  };

  const orthographies = {
    [SYLLABICS]: SYLLABICS,
    [SRO_CIRCUMFLEX]: SRO_CIRCUMFLEX,
    [SRO_MACRON]: SRO_MACRON
  };

  /* Figure out screen and orthography from query string: */
  let params = new URLSearchParams(window.location.search);
  let desiredScreen = params.get('s') || 'default';
  let desiredOrth = params.get('o') || SRO_CIRCUMFLEX;

  if (!(desiredScreen in screens)) {
    console.warn(`${desiredScreen} is not a valid screen; using default.`);
    desiredScreen = 'default';
  }

  if (!(desiredOrth in orthographies)) {
    console.warn(`${desiredOrth} is not a valid orthography; using sro-c.`);
    desiredScreen = SRO_CIRCUMFLEX;
  }

  let screen = screens[desiredScreen];
  orthography.set(desiredOrth)
</script>


<a href="#start-of-content" tabindex="0" class="skip-to-content">Skip to content</a>
<Header />
<Search />
<main id="start-of-content" class="app__content app__pane">
  <svelte:component this={screen} />
</main>
<Footer />

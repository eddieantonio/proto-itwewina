<script>
  import Cree from './components/Cree.svelte';

  import DefaultScreen from './screens/Default.svelte';
  import HomeScreen from './screens/Home.svelte';
  
  import Footer from './components/Footer.svelte';

  // TODO: make this work!
  const screens = {
    'default': DefaultScreen,
    'home': HomeScreen
  };
  let screen = screens['home'];
</script>

<header class="application-header">
  <a href="/">
    <h1 class="application-header__heading application-title"><Cree sro="itwêwina" /></h1>
    <h2 class="application-header__heading application-subtitle">Plains Cree Dictionary</h2>
  </a>
</header>

<svelte:component this={HomeScreen} />

<Footer />

<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';

  import DefaultScreen from './screens/Default.svelte';
  import HomeScreen from './screens/Home.svelte';
  
  // TODO: make this work!
  const screens = {
    'default': DefaultScreen,
    'home': HomeScreen
  };
  let screen = screens['home'];
</script>


<Header />
<svelte:component this={HomeScreen} />
<Footer />

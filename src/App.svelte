<script>
  import Cree from './components/Cree.svelte';

  import DefaultScreen from './screens/Default.svelte';
  // TODO: make this work!
  const screens = {
    'default': DefaultScreen,
  };
  let screen = DefaultScreen;
</script>

<header class="application-header">
  <a href="/">
    <h1 class="application-header__heading application-title"><Cree sro="itwêwina" /></h1>
    <h2 class="application-header__heading application-subtitle">Plains Cree Dictionary</h2>
  </a>
</header>

<DefaultScreen/>

<footer class="application-footer">
  <div class="partner-logos">
    <a class="partner-logos__logo" href="https://www.maskwacised.ca/"><img src="img/mesc-logo.svg" alt="MESC"></a>
    <a class="partner-logos__logo" href="https://altlab.artsrn.ualberta.ca/"><img src="img/uofa-logo.svg" alt="University of Alberta"></a>
    <a class="partner-logos__logo" href="http://fnuniv.ca/"><img src="img/fnu-logo.png" alt="FNU"></a>
  </div>
  <p class="application-footer__about">
    <small> 2019 © University of Alberta. This app uses icons from
      <a href="https://github.com/FortAwesome/Font-Awesome/tree/5.11.1">
        Font Awesome Free</a>, distributed under the terms of the
      <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0 license</a>.
    </small>
  </p>
</footer>

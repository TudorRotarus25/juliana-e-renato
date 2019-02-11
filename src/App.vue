<template>
  <div id="app">
    <hero />
    <intro />
    <rsvp />
    <ceremony-info />
    <presents-list />
    <wedding-footer />
  </div>
</template>

<script>
import Hero from './components/Hero.vue';
import Intro from './components/Intro.vue';
import Rsvp from './components/Rsvp.vue';
import CeremonyInfo from './components/CeremonyInfo.vue';
import PresentsList from './components/PresentsList.vue';
import WeddingFooter from './components/WeddingFooter.vue';

export default {
  name: 'app',
  components: {
    Hero,
    Intro,
    Rsvp,
    CeremonyInfo,
    PresentsList,
    WeddingFooter,
  },
};
</script>

<style lang="scss">
  @import 'styling/variables';

  @font-face {
    font-family: 'Admiration Pains';
    src: url('./assets/AdmirationPains.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Alexis Marie';
    src: url('./assets/AlexisMarie.ttf') format('truetype');
  }

  html {
    font-size: 25px;
    background-color: $background;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 25px;
  }

  h1 {
    font-family: 'Admiration Pains', Helvetica, Arial, sans-serif;
    font-size: 2.5em;
    letter-spacing: 6px;
  }

  h2 {
    font-family: 'Alexis Marie', Helvetica, Arial, sans-serif;
    font-size: 1em;
  }

  p {
    margin: 5px 0;
    line-height: 1.1;
  }

  a {
    text-decoration: underline;
    color: #fff;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: .9rem;
    line-height: 1.2;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,
      border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    font-family: 'Alexis Marie', Helvetica, Arial, sans-serif;
    cursor: pointer;

    &-primary {
      color: #fff;
      background-color: $primary;
      border-color: darken($primary, 5%);
    }
  }

  .form-control {
    display: block;
    width: calc(100% - 16px);
    padding: 5px 7px;
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Alexis Marie', Helvetica, Arial, sans-serif;
    line-height: 1.5;
    color: $primary;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid lighten($primary, 10%);
    border-radius: 4px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &::placeholder {
      color: lighten($primary, 30%);
    }
  }

  .bordered-title {
    border: 2px solid #fff;
    display: inline-block;
    padding: 5px 30px;
    text-transform: uppercase;
  }

  #app {
    font-family: 'Alexis Marie', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
  }
</style>

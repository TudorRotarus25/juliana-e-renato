<template>
  <div id="app">
    <invitation-details />
    <guest-info />
    <wedding-footer />
  </div>
</template>

<script>
import InvitationDetails from './components/InvitationDetails.vue';
import GuestInfo from './components/GuestInfo.vue';
import WeddingFooter from './components/WeddingFooter.vue';

export default {
  name: 'app',
  components: {
    InvitationDetails,
    GuestInfo,
    WeddingFooter,
  },
};
</script>

<style lang="scss">
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
}

p {
  margin: 5px 0;
}

.uppercase {
  text-transform: uppercase;
}

#app {
  font-family: 'Alexis Marie', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

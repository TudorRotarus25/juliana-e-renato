<template>
  <div id="app">
    <invitation-details />
    <guest-info />
    <location-map />
    <wedding-footer />
  </div>
</template>

<script>
import InvitationDetails from './components/InvitationDetails.vue';
import GuestInfo from './components/GuestInfo.vue';
import LocationMap from './components/LocationMap.vue';
import WeddingFooter from './components/WeddingFooter.vue';

export default {
  name: 'app',
  components: {
    InvitationDetails,
    GuestInfo,
    LocationMap,
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

a {
  text-decoration: none;
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
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  font-family: 'Alexis Marie', Helvetica, Arial, sans-serif;

  &-primary {
    color: #fff;
    background-color: #2a856c;
    border-color: darken(#2a856c, 5%);
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
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(60, 60, 60, .26);
  border-radius: 4px;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

#app {
  font-family: 'Alexis Marie', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

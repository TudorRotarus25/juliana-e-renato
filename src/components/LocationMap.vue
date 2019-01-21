<template>
  <div class="locationMap">
    <div class="locationMap__map">

    </div>
    <div class="locationMap__details">
      <p>
        Eco Espaço
      </p>
      <p>
        Estrada do Ouro Fino - km 13 s/n
      </p>
      <p>
        Santa Isabel - SP
      </p>
      <a
        class="btn btn-primary"
        target="_blank"
        href="http://maps.google.com/?q=Eco+Espaço+Estrada+do+Ouro+Fino+Santa+Isabel"
      >
        Open in Maps
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationMap',
};
</script>

<style
  lang="scss"
  scoped
>
  #map {
    width: 100%;
    height: 400px;
    background-color: grey;
  }

  .locationMap {
    display: flex;
    align-items: center;
    max-width: 1000px;
    margin: 100px auto;

    &__details {
      text-align: left;
      margin-left: 30px;

      .btn {
        margin-top: 20px;
      }
    }
  }
</style>

<template>
  <div class="ceremonyInfo">
    <div class="ceremonyInfo__details">
      <h2 class="bordered-title">
        CERIMÔNIA E RECEPÇÃO
      </h2>
      <p>
        Horário cerimônia: 13horas
      </p>
      <p>
        Local: Estrada Do Ouro Fino (Km 13) - Santa Isabel - SP, Brasil
      </p>
      <a
        target="_blank"
        href="https://goo.gl/maps/Ykw8xbM89vF2"
      >
        Clique aqui para acessar o Google Maps.
      </a>
    </div>
    <div class="ceremonyInfo__map">
      <a
        target="_blank"
        href="https://goo.gl/maps/Ykw8xbM89vF2"
      >
        <img
          src="../assets/MAP.png"
          alt="Location map"
        >
      </a>
    </div>
    <div class="ceremonyInfo__extraInfo">
      <p>
        TRAJE
      </p>
      <p>
        O nosso casamento será em um sitio ao ar livre. E apesar da cerimônia e recepção
        serem durante o dia, não podemos nos esquecer que será no outono.
      </p>
      <p>
        Dessa forma, os trajes escolhidos serão os seguintes:
      </p>
      <p>
        Padrinhos e Madrinhas - Social Completo (evitem a cor azul)
      </p>
      <p>
        Demais convidados - Esporte Fino
      </p>
      <p>
        Mas, o mais importante de tudo é que estejam bem confortáveis para aproveitar este
        dia especial da melhor maneira possível.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CeremonyInfo',
};
</script>

<style
  lang="scss"
  scoped
>
  .ceremonyInfo {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 50px auto;

    @media screen and (min-width: 768px) {
      margin: 150px auto 100px;
    }

    p {
      margin: 12px;
    }

    &__details {
      flex-basis: 100%;

      @media screen and (min-width: 768px) {
        flex-basis: 50%;
      }

      .bordered-title {
        margin-top: 5px;
      }
    }

    &__map {
      flex-basis: 100%;
      padding: 20px 10px 5px;

      @media screen and (min-width: 768px) {
        flex-basis: calc(50% - 10px);
        padding: 0;
      }

      a {
        display: inline-block;
      }

      img {
        display: block;
        width: 100%;
      }
    }

    &__extraInfo {
      @media screen and (min-width: 768px) {
        margin: 20px 0;
      }
    }
  }
</style>

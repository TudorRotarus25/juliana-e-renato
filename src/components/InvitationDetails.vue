<template>
  <div class="container">
    <div class="invitationDetails">
      <h1 class="invitationDetails__title">
        Juliana e Renato
      </h1>
      <div class="invitationDetails__main">
        Depois de dez ano, estamos felizes em informá-lo(a) de que finalmente decidimos juntar as
        escovas! E por isso, gostaríamos de convidá-lo(a) para nossa cerimônia e recepção de
        casamento.
      </div>
      <div class="invitationDetails__time uppercase">
        Domingo, 26 de Maio de 2019 às 13 horas
      </div>
      <div class="invitationDetails__place">
        <p>
          Eco Espaço - Estrada do Ouro Fino - km 13 s/n
        </p>
        <p>
          Santa Isabel - SP
        </p>
      </div>
      <img
        src="../assets/flower.png"
        class="invitationFlower invitationFlower--top"
        alt="top flower"
      >
      <img
        src="../assets/flowerBottom.png"
        class="invitationFlower invitationFlower--bottom"
        alt="bottom flower"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvitationDetails',
};
</script>

<style
  lang="scss"
  scoped
>
  .container {
    position: relative;
    padding: 50px;
  }

  .invitationDetails {
    height: calc(100vh - 102px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #26445e;

    &__main {
      padding: 0 50px;
      max-width: 1000px;
    }

    &__time {
      padding: 40px 0;
      font-size: 1.2em;
    }
  }

  .invitationFlower {
    position: absolute;
    width: 300px;

    &--top {
      top: 0;
      left: 0;
    }

    &--bottom {
      width: 350px;
      bottom: 0;
      right: 0;
    }
  }
</style>

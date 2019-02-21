<template>
  <div class="container">
    <div class="invitationDetails">
      <img
        src="../assets/HEART.png"
        class="bg-image"
        alt="Juliana e Renato"
      >
      <h1 class="invitationDetails__title">
        Juliana e Renato
      </h1>
      <p class="invitationDetails__countdown">
        FALTAM {{ remainingDays }} DIAS • 26.05.2019
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvitationDetails',
  computed: {
    remainingDays() {
      const oneDay = 24 * 60 * 60 * 1000;
      const weddingDate = new Date(2019, 4, 26);
      const currentDate = new Date();

      return Math.ceil(Math.abs((currentDate.getTime() - weddingDate.getTime()) / oneDay));
    },
  },
};
</script>

<style
  lang="scss"
  scoped
>
  .container {
    position: relative;
    padding: 10px;

    @media screen and (min-width: 768px) {
      padding: 30px;
    }
  }

  .invitationDetails {
    height: calc(100vh - 22px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;

    @media screen and (min-width: 768px) {
      height: calc(100vh - 62px);
    }

    &__main {
      padding: 0 50px;
      max-width: 1000px;
    }

    &__title,
    &__countdown {
      z-index: 1;
    }

    &__title {
      margin: 0 10px 13px 10px;
    }

    &__countdown {
      position: absolute;
      bottom: 30px;
      margin: 0;

      @media screen and (min-width: 768px) {
        position: relative;
        bottom: 0;
      }
    }

    .bg-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70%;
      max-width: 500px;

      @media screen and (min-width: 768px) {
        width: 50%;
      }
    }
  }
</style>

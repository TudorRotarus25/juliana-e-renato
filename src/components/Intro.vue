<template>
  <div class="intro">
    <p>
      Bem vindo ao nosso site de casamento!! Se chegou até aqui é porque você é uma pessoa muito
      especial para nós. Enquanto a data não chega, veja todas as informações importantes do nosso
      casamento e acompanhe de pertinho cada passo para que esse dia seja especial e inesquecível
      para você, assim como será para nós.
    </p>
    <p>
      Esperamos você lá!
    </p>
    <p>
      Renato e Juliana
    </p>
  </div>
</template>

<script>
export default {
  name: 'Intro',
};
</script>

<style
  lang="scss"
  scoped
>
  .intro {
    margin: 30px auto;
    padding: 0 10px;
    max-width: 1200px;

    @media screen and (min-width: 768px) {
      margin: 70px auto;
    }

    p {
      margin: 10px 0;

      @media screen and (min-width: 768px) {
        margin: 20px 0;
      }
    }
  }
</style>

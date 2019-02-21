<template>
  <div class="presentsList">
    <h2 class="bordered-title">
      LISTA DE PRESENTES
    </h2>
    <p>
      <i class="fas fa-gift" />
      Caso queria nos presentear,
      <a
        href="https://casamento.pontofrio.com.br/#/lista-presentes/742609"
        target="_blank"
      >
        clique aqui
      </a>
      para acessar a lista de sugestões de presentes.
    </p>
  </div>
</template>

<script>
export default {
  name: 'PresentsList',
};
</script>

<style
  lang="scss"
  scoped
>
  .presentsList {
    padding: 0 10px;

    p {
      margin-top: 20px;
    }
  }

  i {
    margin-right: 10px;

    @media screen and (min-width: 768px) {
      font-size: 1.7em;
    }
  }
</style>

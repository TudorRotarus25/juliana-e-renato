<template>
  <footer>
    Juliana
    <i class="fas fa-heart" />
    Renato
  </footer>
</template>

<script>
export default {
  name: 'WeddingFooter',
};
</script>

<style
  lang="scss"
  scoped
>
  footer {
    border-top: 1px solid #fff;
    padding: 20px;
    margin-top: 50px;

    @media screen and (min-width: 768px) {
      margin-top: 150px;
    }

    i {
      font-size: 0.7em;
      margin: 0 5px;
    }
  }
</style>

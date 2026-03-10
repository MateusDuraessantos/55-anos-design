<template>
  <div class="banner banner__width">
    <h1 class="banner__h1">55 anos, explore os projetos que marcaram cada ano da nossa trajetória</h1>

    <p class="banner__text">Nesta página, reunimos todos os projetos que marcaram a trajetória do nosso curso ao longo dos anos. Aqui, você pode explorar cada trabalho e utilizar o filtro por ano para acompanhar a evolução das ideias, metodologias e resultados que construíram nossa história. Mais do que uma vitrine, este espaço representa o talento, a dedicação e o crescimento contínuo de nossos alunos e professores.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.banner {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 0 80px 0;
}
.banner__text {
  font-size: 20px;
}
.banner__width {
  width: calc(100% - 200px);
  margin: auto;
}
.banner__h1 {
  font-size: 40px;
  font-weight: 500;
  line-height: 110%;
}
@media screen and (max-width: 1000px) {
  .g-h1 {
    font-size: 30px;
  }
  .banner__width {
    width: 100%;
  }
  .banner__text {
    font-size: 16px;
  }
  .banner {
    padding: 10px 0 30px 0 ;
  }
  .banner__h1 {
    font-size: 30px;
  }
} 
</style>
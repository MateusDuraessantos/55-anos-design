<template>
  <div class="banner">

    <div class="banner__content max__width">
      <div class="banner__col--1">
        <h1>O Curso de Bacharelado em Design da FAU-M</h1>
        <p class="banner__55">55 anos</p>
      </div>

      <div class="banner__col--2">
        <img class="banner__logo" width="500" height="500" src="/home/logo_banner.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      
    }
  },
  
  mounted() {
  },
  
  methods: {

  }
}

</script>

<style scoped>
* {
  color: white;
  line-height: 114%;
}
.banner {
  height: 100vh;
  width: 100%;
  background: var(--black);
  border-radius: 0 0 100px 0;
}
.banner__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100%;
  gap: 120px;
}
h1 {
  font-size: 80px;
  font-weight: 400;
}
.banner__55 {
  font-size: 120px;
}
.banner__col--1 {
  display: flex;
  flex-direction: column;
}
.banner__col--2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner__logo {
  width: 100%;
  object-fit: contain;
  height: max-content;
}
@media screen and (max-width: 1200px) {
  .banner__content{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .banner__logo {
    width: 100%;
  }
  h1 {
    font-size: 10vw;
  }
  .banner__55 {
    font-size: 14vw;
  }
}

</style>
<template>
  <div class="banner">

    <div class="banner__content max__width">
      <div class="banner__col--1">
        <h1 class="banner__h1">O Curso de Bacharelado em Design da FAU-M</h1>
        <p class="banner__55">55 anos</p>
        <a class="banner__button" :href="linkForms" target="_blank">Participe com a gente</a>
      </div>

      <div class="banner__col--2">
        <img class="banner__logo" width="500" height="500" src="/home/logo_banner.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { linkForms } from '@/constants/variables.js'

export default {
  name: 'home',
  data() {
    return {
      linkForms: linkForms
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
.banner__button {
  display: flex;
  align-items: center;
  font-size: 20px;
  color: white;
  border-radius: 50px;
  height: 52px;
  width: max-content;
  padding: 0 30px;
  background: transparent;
  position: relative;
  z-index: 0;
  border: none;
  transition: .3s;
  cursor: pointer;
}
.banner__button:hover {
  background:rgba(255, 255, 255, 0.1);
  transition: .3s;
}
.banner__button::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 2px; /* espessura da borda */
  border-radius: 50px;
  background: linear-gradient( 90deg, #ff00cc, #ff6a00, #ffd000 );
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
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
  .banner {
    border-radius: 0 0 50px 0;
  }
  .banner__content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }
  .banner__logo {
    width: calc(100% - 100px);
  }
  h1 {
    font-size: 10vw;
  }
  .banner__col--1 {
    text-align: center;
    gap: 10px;
  }
  .banner__55 {
    font-size: 50px;
  }
  .banner__h1 {
    font-size: 40px;
  }
}

</style>
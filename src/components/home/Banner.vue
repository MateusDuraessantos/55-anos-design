<template>
  <div class="banner">

    <div class="banner__content max__width">
      <div class="banner__col--1">
        <h1 class="banner__h1">O Curso de Bacharelado em Design da FAU-M</h1>
        <a class="banner__button" :href="linkForms" target="_blank">Participe com a gente</a>

        <div class="banner__redes">
          <a class="banner__link" :href="linkedin" target="_blank">
            <img class="banner__rede--img" src="/linkedin.png" width="50" height="50" alt="LinkedIn 55 anos">
          </a>
          <a class="banner__link" :href="instagram" target="_blank">
            <img class="banner__rede--img" src="/instagram.png" width="50" height="50" alt="Instagram 55 anos">
          </a>
        </div>
        
      </div>

      <div class="banner__col--2">
        <img class="banner__logo" width="500" height="500" src="/home/anos_55.svg" alt="55 anos">
        <img class="banner__logo" width="500" height="500" src="/home/logo_banner.svg" alt="logo de 55 anos do curso de design Mackenzie">
        <button class="banner__btn" @click="scrollToSection">
          <img class="banner__arrow" width="40" height="40" src="/arrow_yellow.svg" alt="Seta para baixo">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { linkForms, linkedin, instagram } from '@/constants/variables.js'

export default {
  name: 'home',
  data() {
    return {
      linkForms: linkForms,
      linkedin: linkedin,
      instagram: instagram,
    }
  },
  
  mounted() {
  },
  
  methods: {
    scrollToSection() {
      const section = document.getElementById('sobre');
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      })

    }
  }
}

</script>

<style scoped>
* {
  color: white;
  line-height: 114%;
}
.banner {
  display: flex;
  align-items: center;
  height: 100vh;
  min-height: 775px;
  width: 100%;
  background: var(--black);
  border-radius: 0 0 100px 0;
  padding-top: 80px;
}
.banner__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 80px;
}
h1 {
  font-size: 60px;
  font-weight: 400;
}
.banner__h1 {
  font-weight: 300;
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
.banner__rede--img {
  cursor: pointer;
}
.banner__col--1 {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.banner__col--2 {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  height: 100%;
  justify-content: space-between;
}
.banner__logo {
  width: 100%;
  object-fit: contain;
  height: max-content;
}
.banner__btn {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.banner__redes {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}
.banner__rede--img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
.banner__link {
  cursor: pointer;
  transition: .3s;
}
.banner__link:hover {
  opacity: 0.8;
  transition: .3s;
}
@media screen and (max-width: 1000px) {
  .banner {
    border-radius: 0 0 30px 0;
    height: calc(100vh - 40px);
  }
  .banner__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }
  .banner__logo {
    width: calc(100% - 100px);
  }
  .banner__col--2 {
    gap: 16px;
  }
  h1 {
    font-size: 10vw;
  }
  .banner__col--1 {
    text-align: center;
    gap: 20px;
  }
  .banner__h1 {
    font-size: 40px;
  }
  .banner__button {
    margin: auto;
  }
  .banner__redes {
    justify-content: center;
  }
}

</style>
<template>
  <footer>
    <div class="footer__content max__width">

      
      <div class="footer__grid">
        <div class="footer__col--1">
          <img class="footer__logo" height="200" width="300" src="/logo_design_mack_d_55.svg" alt="">
          <p class="footer__text">O Curso de Bacharelado em Design da FAU-Mackenzie tem como objetivo formar profissionais com competências amplas e habilidades.</p>
        </div>

        <div class="flex__column">
          <strong>Redes sociais</strong>
          <a class="footer__a" :href="linkedin" target="_blank">Linkedin</a>
          <a class="footer__a" :href="instagram" target="_blank">@Instagram</a>
        </div>

        <div class="flex__column">
          <strong>Colaboradores</strong>
          <a class="footer__a" href="#">Mateus Durães</a>
          <a class="footer__a" href="#">CÊS</a>
          <a class="footer__a" href="#">Tre</a>
          <a class="footer__a" href="#">Ivo Pons</a>
        </div>
      
        <div class="flex__column flex__column--menu">
          <strong>Menu</strong>
          <router-link to="/" class="flex__column">
            <button class="footer__a" @click="scrollToSection('sobre')">Sobre</button>
            <button class="footer__a" @click="scrollToSection('livro-55-anos')">Livro 55 anos</button>
            <button class="footer__a" @click="scrollToSection('linha-do-tempo')">Linha do tempo</button>
            <button class="footer__a" @click="scrollToSection('participe')">Participe</button>
          </router-link>
        </div>


      </div>
      
      <img class="footer__grafismo" height="50" width="1000" src="/footer__grafismo.svg" alt="">

      <p>Design Mackenzie - 2026</p>

    </div>

    <div class="footer__line background__gradient"></div>

  </footer>
</template>

<script>
import { linkedin, instagram } from '@/constants/variables.js'
import { scrollToSection } from '@/communs/scripts'

export default {
  name: 'Footer',
  data() {
    return {
      linkedin: linkedin,
      instagram: instagram,
      scrollToSection: scrollToSection,
    }
  }
}
</script>

<style scoped>
footer {
  position: relative;
  font-size: 16px;
  line-height: 20px;
  height: max-content;
  width: 100%;
  background: var(--black);
  color: white;
}
.flex__column {
  display: flex;
  flex-direction: column;
}
.flex__column strong, .footer__a {
  padding: 8px 0;
}
.footer__a {
  color: var(--gray_01);
  transition: .2s;
  font-size: 16px;
  cursor: pointer;
  text-align: start;
}
.footer__a:hover {
  transition: .2s;
  color: white;
}
.footer__content {
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 40px;
  padding: 80px 0;
}
.footer__text {
  font-weight: 300;
  font-size: 14px;
}
.footer__grid {
  display: grid;
  align-self: flex-start;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 60px;
}
.footer__logo {
  width: 100%;
  max-width: 300px;
  height: max-content;
  object-fit: contain;
}
.footer__grafismo {
  width: 100%;
  height: max-content;
  object-fit: contain;
}
.footer__line {
  position: absolute;
  height: 10px;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1;
}
@media screen and (max-width: 1000px) {
  .footer__grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .flex__column--menu {
    display: none;
  }
  .footer__text {
    text-align: center;
  }
  .footer__col--1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }
}
</style>
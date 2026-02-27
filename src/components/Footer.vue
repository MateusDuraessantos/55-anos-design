<template>
  <footer>
    <div class="footer__content max__width">

      
      <div class="footer__grid">
        <div class="footer__col--1">
          <img class="footer__grafismo" height="200" width="300" src="/logo_design_mack_d_55.svg" alt="">
          <p class="footer__text">O Curso de Bacharelado em Design da FAU-Mackenzie tem como objetivo formar profissionais com competências amplas e habilidades.</p>
        </div>

        <div class="flex__column">
          <strong>Redes sociais</strong>
          <a :href="linkedin" target="_blank">Linkedin</a>
          <a :href="instagram" target="_blank">@Instagram</a>
        </div>

        <div class="flex__column">
          <strong>Colaboradores</strong>
          <a href="">Mateus Durães</a>
          <a href="">CÊS</a>
          <a href="">Tre</a>
          <a href="">Ivo Pons</a>
        </div>
      
        <div class="flex__column">
          <strong>Menu</strong>
          <router-link to="/" class="flex__column">
            <a class="header__a" @click="scrollToSection('sobre')">Sobre</a>
            <a class="header__a" @click="scrollToSection('livro-55-anos')">Livro 55 anos</a>
            <a class="header__a" @click="scrollToSection('linha-do-tempo')">Linha do tempo</a>
            <a class="header__a" @click="scrollToSection('participe')">Participe</a>
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
  gap: 16px;
}
footer a {
  color: var(--gray_01);
  transition: .2s;
  cursor: pointer;
}
footer a:hover {
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
  gap: 40px;
}
.footer__grafismo {
  width: 100%;
  height: max-content;
  object-fit: contain;
}
.footer__line {
  height: 5px;
  width: 100%;
}

@media screen and (max-width: 1000px) {
  .footer__grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
<template>
  <div class="body">

    <div class="popup" v-if="showPopup">
      <Popup
        :projectsIndex="projectsIndex"
        :key="projectsIndex"
        @refresh-popup="atualizarPopup"
        @close-popup="fecharPopup"
      />
    </div>
    
    <!--  -->

    <div class="container-projetos">
      <div
        :class="`projeto categoria__${project.categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`"
        v-for="(project, index) in limitedItems"
        :key="index"
        @click="upPopup(index)"
      >

        <img class="projeto_thumb" :src="'projetos/' + project.thumb" loading="lazy">

        <div class="container_user">
          <div class="user" v-for="ownersv in project.owner">
            <img class="user_img" :src="'projetos/' + ownersv.userFoto" />
            <p class="user_name">{{ ownersv.name }}</p>
          </div>
        </div>
        <div class="projectName">
          <p>{{ project.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from '@/constants/projectsInfos.js'
import Popup from '@/components/projetos/Popup.vue'

export default {
  name: 'ProjetosPage',
  components: { Popup }, 
  data() {
    return {
      imagesNumber: 0,
      numImgGrid: '',
      projects: projects,
      popupValue: false,
      indexPopup: null,
      coisas: 4,
      maxItems: 60,
      next: true,
      back: true,
      passImagens: true,
      showPopup: false,
      projectsIndex: 0,
    }
  },
  computed: {
    limitedItems() {
      return this.projects.slice(0, this.maxItems);
    }
  },
  mounted() {
    this.scrolltoTop()
  },
  methods: {
    upPopup(index) {
      this.projectsIndex = index
      this.showPopup = true
    },
    scrolltoTop() {
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
    },
    fecharPopup() {
      this.showPopup = false
    },
    atualizarPopup(value) {
      this.projectsIndex = value
    }
  },
}
</script>

<style>
/* popup */
.popup {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: 1s slowFade--open forwards;
  z-index: 11;
}
@keyframes slowFade--open {
  from { opacity: 0 }
  to { opacity: 1 }
}

:root {
  --gap-img: 10px
}
[type="white"] {
  border-radius: 50px;
  background: white;
  color: black;
  padding: 6px 20px;
  border: 1px solid var(--white_01);
}
[type="black"] {
  border-radius: 8px;
  background: var(--white_00);
  color: var(--gray_00);
  font-weight: 400;
  padding: 6px 11px;
  border: 1px solid var(--white_01);
}
</style>

<style>
.aulas__title {
  border-color: #CC141D;
}
.body {
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 140px;
  width: calc(100% - 40px);
}
.imagens_camp {
  background: black;
  border-radius: 8px;
  padding: 40px;
}
/* tags Expor */
.cont_inputs__cadastro {
  position: relative;
  background: black;
  padding: 40px;
  border-radius: 8px;
}
.projeto {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
}
.container-projetos {
  display: grid;
  column-gap: 20px;
  color: white;
  width: 100%;
  margin: auto;
  padding-bottom: 100px;
}
.projeto_thumb {
  cursor: pointer;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 520px;
  transition: .5s;
}
.container_user {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  width: 100%;
  padding: 10px 10px 0 0;
  border-radius: 8px 8px 0 0;
  gap: 10px;
  top: 0;
  height: 50px;
  z-index: 5;
  opacity: 0;
  transition: .3s;
}
.container_user img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  transition: .3s;
}
.projeto:hover .container_user {
  opacity: 1;
  transition: .3s;
}
.user {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}
.user_img {
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.6);
  object-fit: cover;
}
.user_name {
  position: absolute;
  bottom: -24px;
  white-space: nowrap;
  text-align: center;
  opacity: 0;
  transition: .2s;
  font-weight: 400;
  text-shadow: 2px 3px 10px rgba(0, 0, 0, 1);
}
.user:hover .user_name {
  transition: .2s;
  opacity: 1;
}
.projectName {
  position: absolute;
  bottom: 0;
  opacity: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  transition: .2s;
  padding: 0 20px;
  color: rgb(211, 211, 211);
  font-weight: 400;
}
.projeto:hover .projectName {
  transition: .2s;
  opacity: 1;
}
h6 {
  font-weight: 400;
  margin-bottom: 18px;
  font-size: 14px;
}
.download {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  white-space: nowrap;
  padding: 0 100px;
}
.download__bubble {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  background: #414141;
  border-radius: 50%;
  height: 3.3vw;
  width: 3.3vw;
  max-height: 70px;
  max-width: 70px;
  min-height: 44px;
  min-width: 44px;
  transition: .2s;
}
.download:hover .download__bubble {
  background: #b50009;
  transition: .2s;
}
.download__img {
  transition: .2s;
  margin-bottom: 3px;
  width: 86%;
}
.download:hover img {
  transform: translatey(-4px);
  transition: .2s;
}
@media only screen and (min-width:2001px) {
  .container-projetos {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}

@media only screen and (max-width:2000px) {
  .container-projetos {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 1980px) {
  .description {
    display: flex;
    flex-direction: column;
    gap: 38px;
  }
}

@media only screen and (max-width: 1800px) {
  .container-projetos {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 1450px) {
  .container-projetos {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 1000px) {
  #next button,
  #back button {
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
  }
  /*  */
  .body {
    width: calc(100% - 26px);
  }
  .container-projetos {
    gap: 12px;
  }
  .projeto {
    margin: 0;
    height: 30vw;
  }
  /* Alteração do popup */
  .popup__container {
    width: calc(100% - 120px);
  }
  .popup__close {
    text-shadow: 2px 2px 2px black;
  }
  #grid {
    grid-template-columns: 1fr;
  }
  .description {
    column-count: 1;
  }
  .grid__criadores {
    grid-template-columns: 1fr 1fr;
  }
  .popup {
    display: flex;
    justify-content: center;
  }
  .projectName {
    opacity: 1;
  }
  h1 {
    position: absolute;
    top: 124px;
  }
  .popup_buttons {
    width: calc(100% - 500px);
  }
  filter {
    padding: 2px 15px;
    max-width: max-content;
  }
}
@media only screen and (max-width: 700px) {
  .popup_buttons {
    display: none;
  }
  .popup__container {
    width: calc(100% - 20px);
  }
  .container__footer {
    display: grid;
    grid-template-columns: 1fr;
  }
  .container_user {
    display: none;
  }
  .projectName {
    padding: 0 10px;
  }
  h1 {
    margin: 0;
    text-align: center;
    font-size: 60px;
  }
  .popup__overflow {
    padding: 0;
  }
  .popup__container {
    width: 100%;
    margin: 0;
  }
  .cont_description,
  .footer__popup,
  header-popup {
    padding: 10px
  }
  .projeto {
    margin: 0;
  }
  .vitrine-grid {
    grid-template-columns: 1fr !important;
  }
}

/* Mobile */

@media only screen and (max-width: 500px) {
  .projectName {
    display: none;
  }
  .container-projetos {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4px;
  }
  .body {
    width: calc(100% - 12px);
  }

  [type="white"] {
    padding: 2px 12px;
  }
  .criadores__container {
    align-items: flex-start;
    flex-direction: column;
  }
  .description {
    margin: 0 0 20px 0;
  }

  header-popup {
    gap: 0;
  }
  .popup__container {
    max-width: 100%;
  }
}
</style>
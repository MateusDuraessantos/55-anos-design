<template>
  <div class="body">

    <Banner />

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
import Banner from '@/components/projetos/Banner.vue'

export default {
  name: 'ProjetosPage',
  components: { Popup, Banner }, 
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
@media only screen and (max-width: 500px) {
  [type="white"] {
    padding: 2px 12px;
  }
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
}
@media only screen and (max-width: 700px) {
  .container_user {
    display: none;
  }
  h1 {
    margin: 0;
    text-align: center;
    font-size: 60px;
  }
  .projeto {
    margin: 0;
    border-radius: 0;
    height: 44vw;
  }
  .projectName {
    display: none;
    padding: 0 10px;
  }
  .container-projetos {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1px;
  }
  .body {
    width: 100%;
  }
}
</style>
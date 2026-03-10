<template>
  <div>

    <div class="popup__loading">
      <span>carregando</span>
      <div class="popup__load"></div>
    </div>

    <button class="popup__close" @click="closePopup">✕</button>

    <div class="popup__overflow">

      <!-- Passar e voltar -->
      <div class="pass" v-if="passImagens">

        <div class="pass__container popup__next" v-if="showButton_next">
          <button class="popup__next--btn reload next" @click="trocarProjeto('next')"></button>
          <p class="popup__arrow">→</p>
        </div>

        <div class="pass__container popup__back" v-if="showButton_back">
          <button class="popup__next--btn reload back" @click="trocarProjeto('back')"></button>
          <p class="popup__arrow">←</p>
        </div>
      </div>

      <div class="popup__content popup--animation">

        <div class="popup__header">
          <span>
            <p class="font-light">Projeto</p>
            <div class="popup__title">
              <h2 class="popup__h2">
                {{ currentProject.name_project }}
              </h2>
            </div>
          </span>
        </div>

        <!-- Vitrine das imagens -->

        <div class="vitrine">
          <img class="vitrine__img" v-for="img in currentProject.portfolios" :src="`/projetos/${img.src}`" :alt="img.alt" width="800" height="500">
        </div>

        <!-- Descrições -->

        <section class="popup__description">
          <div class="popup__text" v-html="currentProject.description">
          </div>
          <div class="popup__footer">
            <div class="popup__about">
              <h5 class="popup__h5">Autores</h5>
              <div class="popup__cards">
                <div class="popup__card" v-for="userInfos in currentProject.owner">
                  <div class="popup__ctn">
                    <div class="popup__photo">
                      <img class="popup__person" :src="'/projetos/' + userInfos.userFoto" width="50" height="50" />
                      <img class="popup__person--hover" :src="'/projetos/' + userInfos.userFoto" width="50" height="50" />
                    </div>
                    <p class="popup__criador">{{ userInfos.name }}</p>
                  </div>
                  
                  <p class="popup__criador">{{ userInfos.email }}</p>
                  <p class="popup__text--formatura" v-if="userInfos.dataFormatura">Data de formatura: {{ userInfos.dataFormatura }}</p>

                  <div class="redes__sociais">
                    <a
                      v-for="medias in userInfos.socialMedia"
                      :href="medias.link"
                      target="_blank"
                    >
                      {{ medias.plataform }}
                    </a>
                    
                  </div>

                  <div class="popup__portfolio" v-if="userInfos.personalPotfolio">
                    <img src="/web.svg" width="20" height="20" alt="Ícone da internet">
                    <a :href="userInfos.personalPotfolio" target="_blank">Portfólio pessoal</a>
                  </div>

                </div>
              </div>
            </div>

            <div class="popup__about popup__about--infos">
              <div>
                <span v-if="currentProject.empresaEnvolvida">
                  <h6>Empresa envolvida</h6>
                  <p class="font-light">{{ currentProject.empresaEnvolvida }}</p>
                  <br>
                </span>
                
                <span v-if="currentProject.dimensoes">
                  <h6>Dimensões</h6>
                  <p class="font-light">{{ currentProject.dimensoes }}</p>
                </span>
                
              </div>
              <span v-if="currentProject.data_project">
                <p class="data_publi">Publicação: {{ currentProject.data_project }}</p>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from '@/constants/projectsInfos.js'
import { addHashWhenOpenPopup } from '@/communs/urls.js'

export default {
  name: 'Popup',
  props: ['projectsIndex'],
  data() {
    return {
      imagesNumber: 0,
      projects: projects,
      popupValue: false,
      indexPopup: 0,
      maxItems: 60,
      passImagens: true,
      showGrid: true,
      onEsc: null
    }
  },
  mounted() {
    this.indexPopup = this.projectsIndex
    this.bodyScroll(true)

    document.querySelector('.popup__overflow').addEventListener('click', (event) => {
      if (event.target.classList.contains('popup__overflow')) this.closePopup()
    })
    
    this.closeOnEscape()
    addHashWhenOpenPopup(this.currentProject.name_project)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.onEscKeydown)
    history.replaceState(null, null, window.location.pathname + window.location.search);
    this.bodyScroll(false)
  },
  computed: {
    currentProject() {
      return this.projects[this.indexPopup]
    },
    showButton_next() {
      return !(this.indexPopup === this.projects.length - 1)
    },
    showButton_back() {
      return !(this.indexPopup === 0)
    },
  },
  methods: {
    onEscKeydown(e) {
      if (e.key === 'Escape') this.closePopup()
    },
    closeOnEscape() {
      window.addEventListener('keydown', this.onEscKeydown)
    },
    closePopup() {
      this.bodyScroll(false)
      this.$emit('close-popup')
      window.removeEventListener('keydown', this.closeOnEscape);
    },
    bodyScroll(value) {
      document.body.style.overflow = value ? 'hidden' : ''
    },
    trocarProjeto(toWhere) {
      if (toWhere == 'next') this.indexPopup++
      if (toWhere == 'back') this.indexPopup--
      this.$emit('refreshPopup', this.indexPopup)
    },
    adicionarImgAtributos(path) {
      const img = document.createElement('img')
      img.width = 500
      img.height = 500
      img.alt = '500'
      img.src = `projetos/${path}`
      
      return img
    },
  }
}
</script>

<style scoped>
h6 {
  font-weight: 500;
  font-size: 16px;
}
.font-light {
  font-weight: 400;
  color: var(--gray_00);
}
hr {
  border-width: 1px 0 0 0;
  border-color: #656565;
  border-style: solid;
}
/* Loading */
.popup__loading {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  pointer-events: none;
}
.popup__loading span {
  font-size: 15px;
  font-weight: 400;
  color: #b5b5b5;
}
.popup__load {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 9px dotted rgb(183 183 183);
  z-index: 1;
  animation-name: loading;
  animation-duration: 12s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  border-spacing: 17px;
}
@keyframes loading {
  from { transform: rotate(0) }
  to { transform: rotate(360deg) }
}
/*  */
.popup--animation {
  animation-name: opacitySuave;
  animation-duration: .6s;
  animation-fill-mode: forwards;
}
@keyframes opacitySuave {
  0% { opacity: 0 }
  50% {
    opacity: 0;
    transform: translatey(-20px);
  }
  to {
    opacity: 1;
    transform: translatey(0);
  }
}
.popup__overflow {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: overlay;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
}
.popup__content {
  position: relative;
  background: var(--white_00);
  margin-bottom: 60px;
  width: calc(100% - 230px);
  border-radius: 25px;
  cursor: initial;
}
.popup__close {
  position: absolute;
  top: 30px;
  right: 30px;
  border: none;
  background: none;
  color: white;
  font-weight: 400;
  font-size: 30px;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 3;
}
.popup__header {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 20px;
}
.popup__description {
  padding: 20px
}
/* Grid do popup */
.vitrine {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.vitrine__img {
  object-fit: contain;
  height: max-content;
  width: 100%;
}
/* Pass Projetc */
.pass {
  visibility: hidden;
  position: fixed;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 12;
}
.pass__container {
  visibility: visible;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
}
.popup__arrow {
  text-shadow: 1px 1px 3px rgb(0, 0, 0, 1);
  pointer-events: none;
}
.popup__next {
  right: 22px;
}
.popup__back {
  left: 22px;
}
.popup__next--btn {
  cursor: pointer;
  backdrop-filter: blur(12px);
  border-radius: 50%;
  width: 82px;
  height: 82px;
  background: rgba(255, 255, 255, 0.1);
  transition: .2s;
}
.popup__arrow {
  position: absolute;
}
.popup__next:hover button {
  transform: rotate(90deg);
  transition: .3s;
}
.popup__back:hover button {
  transform: rotate(-90deg);
  transition: .3s;
}
/* Descriçoes' */
.popup__text {
  display: flex;
  flex-direction: column;
  font-weight: 400;
  gap: 20px;
}
.popup__text--formatura {
  font-size: 16px;
  color: var(--black);
}
.popup__title {
  display: flex;
  gap: 14px;
  align-items: center;
}
.popup__h2 {
  font-weight: 500;
  font-size: 22px;
  line-height: 36px;
}
.popup__footer {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-top: 30px;
}
.popup__about {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
  border: 1px solid var(--white_01);
  padding: 20px;
  height: 100%;
  border-radius: 22px;
}
.popup__about--infos {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.popup__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.popup__card {
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  border: 1px solid var(--white_01);
  padding: 10px;
  border-radius: 8px;
}
.popup__ctn {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}
.popup__h5 {
  font-size: 20px;
  font-weight: 500;
  color: var(--black);
}
.popup__portfolio {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}
.popup__portfolio a {
  transition: .2s;
  color: var(--gray_00);
}
.popup__portfolio:hover a {
  text-decoration: underline;
  color: var(--black);
  transition: .2s;
}
.popup__criador {
  font-weight: 400;
  font-size: 16px;
  color: var(--gray_00);
  line-height: 20px;
}
.popup__person {
  width: 50px;
  height: 50px;
  cursor: pointer;
  object-fit: cover;
  border-radius: 50%;
}
.popup__photo {
  position: relative;
}
.popup__photo:hover .popup__person--hover {
  transition: .2s;
  transition-delay: .5s;
  opacity: 1;
}
.popup__person--hover {
  position: absolute;
  pointer-events: none;
  bottom: -20px;
  left: calc(100% + 10px);
  padding: 10px;
  background: white;
  width: 340px;
  height: 340px;
  opacity: 0;
  transition: .2s;
  border-radius: 10px;
  -o-object-fit: cover;
  object-fit: cover;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  z-index: 2;
}
.redes__sociais {
  display: flex;
  flex-direction: column;
  margin: 12px 0;
}
.redes__sociais a {
  cursor: pointer;
  text-decoration: none;
  color: #006DBC;
  font-weight: 400;
  transition: .3s;
}
.redes__sociais a:hover {
  color: #0095ff;
  text-decoration: underline;
  transition: .3s;
}
.grid__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.data_publi {
  width: 100%;
  text-align: center;
  font-weight: 400;
  color: var(--gray_00);
  margin-top: 40px;
}
.popup__docentes {
  color: var(--gray_00);
  font-weight: 400;
}
.vitrine {
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 100px;
  margin: auto;
  gap: var(--gap-img);
}
@media only screen and (max-width: 1000px) {
  .popup__next--btn,
  .popup__next--back {
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
  }
  .popup__content {
    width: calc(100% - 120px);
  }
}
@media only screen and (max-width: 700px) {
  .popup__footer {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .popup__content {
    margin: 0;
    width: 100%;
    border-radius: 0;
  }
  .popup__overflow {
    padding: 0;
  }
  .popup__close {
    text-shadow: 2px 2px 2px black;
  }
  #grid {
    grid-template-columns: 1fr;
  }
  .popup__cards {
    grid-template-columns: 1fr 1fr;
  }
  .popup {
    display: flex;
    justify-content: center;
  }
  filter {
    padding: 2px 15px;
    max-width: max-content;
  }
  .popup__description,
  .popup__about,
  .popup__header {
    padding: 10px
  }
}
@media only screen and (max-width: 500px) {
  .popup__ctn {
    align-items: flex-start;
    flex-direction: column;
  }
  .popup__text {
    margin: 0 0 20px 0;
  }
  .popup__header {
    gap: 0;
  }
  .popup__content {
    max-width: 100%;
  }
}
</style>
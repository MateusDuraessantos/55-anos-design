<template>
  <div>

    <div class="popup__loading">
      <span>carregando</span>
      <div class="popup__load"></div>
    </div>
    <!-- Layout -->
    <div class="popup__buttons">
      <div class="layout" @click="square">
        <div class="layout__container" id="layout">
          <div class="square" v-for="obj in buttonSquares" />
        </div>
        <p class="layout__text">Mudar Layout</p>
      </div>
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
            <p class="font-light">5° Semestre</p>
            <div class="popup__title">
              <h2 class="popup__h2">
                {{ currentProject.name }}
              </h2>
              <tag type="white">
                {{ currentProject.categoria }}
              </tag>
            </div>
          </span>
        </div>

        <!-- Vitrine das imagens -->

        <div class="popup__vitrine" ref="grid">

        </div>

        <!-- Descrições -->

        <div class="popup__description">
          <div class="popup__text">
            <p v-for="teste in currentProject.description">
              &nbsp;&nbsp;{{ teste }}
              <br>
              <br>
            </p>

            <!-- Download -->

            <div class="download">
              <div class="download__bubble">
                <img class="download__img" src="/projetos/download.svg" height="30" width="30">
              </div>
              <p>Relatório final</p>
            </div>
          </div>
          <div class="popup__footer">
            <div class="popup__about">
              <h6>Alunos designers projetistas</h6>
              <div class="popup__cards">
                <div class="popup__card" v-for="userInfos in currentProject.owner">
                  <div class="popup__ctn">
                    <img class="popup__person" :src="'projetos/' + userInfos.userFoto" width="50" height="50" />
                    <p class="popup__criador">{{ userInfos.name }}</p>
                  </div>
                  <div class="redes__sociais">
                    <a v-for="medias in userInfos.socialMedia" :href="medias.link" target="_blank">{{
                      medias.plataform }}</a>
                  </div>
                </div>
              </div>
              <div>
                <br>
                <hr>
                <br>
                <h6>Professores orientadores</h6>
                <p class="popup__docentes">
                <p>Prof. Me. Carlos Marcelo Campos Teixeira</p>
                <p>Prof. Dr. Célio Martins da Matta </p>
                <p>Profª. Me. Grace Kishimoto</p>
                </p>
              </div>
            </div>
            <div class="popup__about">
              <h6>Laboratórios utilizados</h6>
              <li class="popup__tags font-light">Impressão</li>
              <li class="popup__tags font-light">Vidro</li>
              <li class="popup__tags font-light">Marcenaria</li>
              <br>
              <h6>Palavras chave</h6>
              <div class="grid__tags">
                <tag type="black" v-for="portfolio in currentProject.palavrasChave">
                  {{ portfolio }}
                </tag>

              </div>
              <p class="data_publi">Publicação: 2 de março de 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from '@/constants/projectsInfos.js'

export default {
  name: 'Popup',
  props: ['projectsIndex'],
  data() {
    return {
      imagesNumber: 0,
      projects: projects,
      popupValue: false,
      indexPopup: 0,
      buttonSquares: 4,
      maxItems: 60,
      passImagens: true,
      showGrid: true,
    }
  },
  mounted() {
    this.indexPopup = this.projectsIndex
    this.bodyScroll(true)
    this.criaColunas()
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
    closePopup() {
      this.bodyScroll(false)
      this.$emit('close-popup')
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
    criaColunas() {
      const grid = this.$refs.grid
      
      if (!grid) return

      grid.innerHTML = '' // evita duplicar

      if (this.currentProject.portfolios.length > 1) {
        const column0 = document.createElement('div')
        const column1 = document.createElement('div')
        column0.classList.add('popup__column')
        column1.classList.add('popup__column')

        this.currentProject.portfolios.forEach((src, index) => {
          
          const img = this.adicionarImgAtributos(src)

          if (index % 2 === 0) column0.appendChild(img)
          else column1.appendChild(img)
        })

        grid.append(column0, column1)
      } else {
        const img = this.adicionarImgAtributos(this.currentProject.portfolios[0])
        grid.appendChild(img)
      }
    },

    square() {
      const grid = this.$refs.grid
      const layout = document.getElementById('layout')

      if (grid.style.gridTemplateColumns == '1fr 1fr' || grid.style.gridTemplateColumns == '') {
        grid.style.gridTemplateColumns = '1fr'
        layout.style.gridTemplateColumns = '1fr'
        this.buttonSquares = 2
      } else {
        grid.style.gridTemplateColumns = '1fr 1fr'
        layout.style.gridTemplateColumns = '1fr 1fr'
        this.buttonSquares = 4
      }
    },
  }
}
</script>

<style>
/* Grid do popup */
.popup__column {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--gap-img);
  height: max-content;
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
.layout {
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1px;
  text-align: center;
  cursor: pointer;
  z-index: 2;
  gap: 16px;
  pointer-events: initial;
  animation-name: opacitySuave;
  animation-duration: 1.3s;
  animation-fill-mode: forwards;
}
.layout__text {
  color: white;
}
.layout__container {
  animation-name: outraanimacao;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 4.6vw;
  height: 4.6vw;
  min-height: 34px;
  max-width: 58px;
  max-height: 58px;
  gap: 6px;
  transition: .2s;
}
@keyframes outraanimacao {
  0% { transform: translatey(0) }
  70% { transform: translatey(0) }
  75% { transform: translatey(-3px) }
  80% { transform: translatey(0) }
  95% { transform: translatey(-3px) }
  100% { transform: translatey(0) }
}
.layout:hover .square {
  transition: .2s;
  background: #b50009;
}
.layout:hover .square {
  transition: .2s;
  max-height: 70px;
  transform: translatey(-5px);
}
.square {
  background: #ab0000;
  padding: 8px;
  height: 100%;
  border-radius: 2px;
  transition: .2s;
}
.popup__vitrine img {
  object-fit: contain;
  height: max-content;
  width: 100%;
}
</style>

<style scoped>
.font-light {
  font-weight: 400;
  color: var(--gray_00);
}
hr {
  border-width: 1px 0 0 0;
  border-color: #656565;
  border-style: solid;
}
.popup__overflow {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: overlay;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}
.popup__content {
  width: 80%;
  position: relative;
  background: var(--white_00);
  margin-bottom: 60px;
  width: calc(100% - 400px);
  border-radius: 25px;
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
  padding: 40px;
}
.popup__description {
  padding: 20px
}
.popup__buttons {
  pointer-events: none;
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  top: 70px;
  left: 0;
  right: 0;
  gap: 46px;
  margin: auto;
  width: calc(100% - 100px);
  white-space: nowrap;
  z-index: 3;
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
  align-items: center;
  margin: 20px 0 60px 0;
  font-weight: 400;
}
.popup__title {
  display: flex;
  gap: 14px;
  align-items: center;
}
.popup__h2 {
  font-weight: 500;
  font-size: 32px;
}
.popup__footer {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-top: 30px;
}
.popup__about {
  background: white;
  border: 1px solid var(--white_01);
  padding: 30px;
  border-radius: 22px;
}
.popup__tags {
  margin-left: 24px;
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
}
.popup__criador {
  font-weight: 400;
  color: var(--gray_00);
}
.popup__person {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}
.redes__sociais {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
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
.popup__vitrine {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 100px;
  margin: auto;
  gap: var(--gap-img);
}
@media only screen and (max-width: 1980px) {
  .popup__text {
    display: flex;
    flex-direction: column;
    gap: 38px;
  }
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
  .layout__text {
    color: var(--black);
  }
  .layout__container {
    gap: 3px;
  }
  .layout {
    gap: 6px;
  }
  .popup__buttons {
    top: 82px;
    width: calc(100% - 174px);
  }
}
@media only screen and (max-width: 700px) {
  .popup__footer {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .projectName {
    padding: 0 10px;
  }
  .popup__buttons {
    display: none;
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
  .popup__text {
    column-count: 1;
  }
  .popup__cards {
    grid-template-columns: 1fr 1fr;
  }
  .popup {
    display: flex;
    justify-content: center;
  }
  .projectName {
    opacity: 1;
  }
  .popup__buttons {
    width: calc(100% - 500px);
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
  .popup__vitrine {
    grid-template-columns: 1fr !important;
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
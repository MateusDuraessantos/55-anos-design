<template>
  <main class="body">

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

    <section class="filters">
      <div class="filter__year">
        <p class="filter__p">{{ value[0] }}</p>
        <el-slider v-model="value" range show-stops :min="1999" :max="2026" />
        <p class="filter__p">{{ value[1] }}</p>
      </div>
      
      <el-input v-model="input" placeholder="Buscar projeto por nome..." />

      <p class="filter__summary">
        {{ projectsEncontraddos }} projetos encontrados
      </p>
    </section>

    <div class="container-projetos">
      <section v-for="keyValue in separarProjetosPorAno.keys" >
        <h1 class="projeto__h1">{{ keyValue }}</h1>
        
        <div class="projeto__grid">
          <div
            class="projeto"
            v-for="(obj, index) in separarProjetosPorAno.projects[keyValue]"
            :key="index"
            @click="upPopup(index)"
          >
            <img class="projeto_thumb" :src="'/projetos/' + obj.portfolios[0].src" loading="lazy" :alt="obj.portfolios[0].alt" width="400" height="300">
            <div class="container_user">
              <div class="user" v-for="owners in obj.owner">
                <img class="user_img" :src="'/projetos/' + owners.userFoto" width="40" height="40" :alt="`Foto do autor: ${owners.name}`" />
                <p class="user_name">{{ owners.name }}</p>
              </div>
            </div>
            <p class="project__name">{{ obj.name }}</p>
          </div>
        </div>

      </section>

    </div>
  </main>
</template>

<script>
import { projects } from '@/constants/projectsInfos.js'
import { verififyHashToOpenPopup } from '@/communs/urls.js'
import Popup from '@/components/projetos/Popup.vue'
import Banner from '@/components/projetos/Banner.vue'
import { tabName } from '@/constants/variables.js'

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
      input: '',
      value: [0, 2026],
    }
  },
  computed: {
    projetoMaisAntigo() {
      return 1000
    },
    projetosFilter() {
      return this.projects.filter(obj => {
        return this.input === '' ? true : this.formatStr(obj.name).includes(this.formatStr(this.input))
      })
    },
    projetosFilterByYear() {
      return this.projetosFilter.filter(obj => obj.data >= this.value[0] && obj.data <= this.value[1])
    },
    projectsEncontraddos() {
      return this.projetosFilterByYear.length
    },
    separarProjetosPorAno() {
      const projects = this.projetosFilterByYear.reduce((acc, next) => {
        if (!acc.hasOwnProperty(next.data)) acc[next.data] = []
        acc[next.data].push(next)
        return acc
      }, {})
      return { keys: Object.keys(projects), projects }
    },
  },
  mounted() {
    this.scrolltoTop()

    verififyHashToOpenPopup((index) => {
      this.projectsIndex = index
      this.showPopup = true
    })

    document.title = tabName + ' - Projetos'

  },
  methods: {
    formatStr(string) {
      return string.toLowerCase()
    },
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
.body {
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 140px;
  width: calc(100% - 40px);
}
/* filters */
.filters {
  position: sticky;
  display: flex;
  flex-direction: column;
  gap: 12px;
  top: 80px;
  background: white;
  width: 100%;
  padding: 10px;
  margin-bottom: 50px;
  z-index: 6;
}
.filter__year {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.filter__p {
  color: var(--gray_00);
  width: 44px;
  font-weight: 500;
  overflow: hidden;
}
/* projeto */
.projeto {
  position: relative;
  display: inline-block;
  width: 100%;
  height: max-content;
  cursor: pointer;
}
.projeto__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
.container-projetos {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 100px;
  margin: auto;
  padding-bottom: 100px;
}
.projeto_thumb {
  cursor: pointer;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 520px;
  border-radius: 6px;
  transition: .5s;
}
.projeto__h1 {
  color: var(--black);
  font-size: 30px;
  text-align: start;
}
.container_user {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  object-fit: cover;
}
.user_name {
  position: absolute;
  top: 100%;
  right: 8px;
  white-space: nowrap;
  text-align: center;
  opacity: 0;
  transition: .2s;
  font-weight: 400;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  color: white;
}
.user:hover .user_name {
  transition: .2s;
  opacity: 1;
}
.project__name {
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  color: var(--black);
  font-weight: 400;
  text-wrap: nowrap;
}
@media only screen and (max-width: 1000px) {
  .body {
    width: calc(100% - 26px);
  }
  .projeto__grid {
    gap: 1px;
  }
  .container-projetos {
    gap: 12px;
  }
  .projeto_thumb {
    border-radius: 0;
  }
  .project__name {
    font-size: 14px;
  }
  .projeto {
    margin: 0;
  }
}
</style>
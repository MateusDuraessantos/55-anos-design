<template>
  <div>
    <div id="inicio">
      <Banner />
    </div>

    <div class="sobre" id="sobre">
      <section>
        <img class="sobre__grafismo" src="/grafismo_azul.svg" alt="">
        
        <div class="sobre__width">
          <h2 class="sobre__text" style="color: var(--blue);">O QUÊ</h2>

          <p>O Curso de Bacharelado em Design da FAU-Mackenzie tem como objetivo formar profissionais com competências amplas e habilidades múltiplas para atuar de forma generalista diante das rápidas transformações da sociedade. Com mais de 50 anos de existência, o curso evoluiu e passou a priorizar a abordagem projetual, incorporando tendências contemporâneas e alinhando-se às necessidades do mercado de trabalho.</p>
        </div>

      </section>

      <section class="sobre__right">
        
        <div class="sobre__width">
          <h2 class="sobre__text" style="color: var(--pink);">PORQUÊ</h2>

          <p>O Curso de Bacharelado em Design da FAU-Mackenzie tem como objetivo formar profissionais com competências amplas e habilidades múltiplas para atuar de forma generalista diante das rápidas transformações da sociedade. Com mais de 50 anos de existência, o curso evoluiu e passou a priorizar a abordagem projetual, incorporando tendências contemporâneas e alinhando-se às necessidades do mercado de trabalho.</p>
        </div>

        <img class="sobre__grafismo" src="/grafismo_rosa.svg" alt="">

      </section>

      <section>
        <img class="sobre__grafismo" src="/grafismo_amarelo.svg" alt="">
        
        <div class="sobre__width">
          <h2 class="sobre__text" style="color: var(--yellow);">QUEM</h2>

          <p>O Curso de Bacharelado em Design da FAU-Mackenzie tem como objetivo formar profissionais com competências amplas e habilidades múltiplas para atuar de forma generalista diante das rápidas transformações da sociedade. Com mais de 50 anos de existência, o curso evoluiu e passou a priorizar a abordagem projetual, incorporando tendências contemporâneas e alinhando-se às necessidades do mercado de trabalho.</p>
        </div>
      </section>
    </div>

    
    <!-- Isso é Mackenzie! -->
    <section class="mackenzie max__width">
      <div class="mackenzie__frase">
        <p class="mackenzie__isso">Isso é 🎉 <br>
          <strong>Mackenzie!!!</strong>
        </p>
        <div>
          <p class="mackenzie__55">55 anos de design</p>
        </div>
      </div>

      
      <p class="mackenzie__p">E estamos comemorando com estilo</p>
      <div class="mackenzie__ctn--arrow">
        <img class="mackenzie__arrow" width="30" height="30" src="/arrow_gray.svg" alt="Seta apontando para baixo">
      </div>
    </section>


    <!-- Livro 55 anos -->
    <el-carousel height="500px" id="livro-55-anos" :interval="5000">
      <el-carousel-item class="carrossel-1">
        <div class="max__width">
          <h3>Título do livro</h3>
          <p>
            vpetências amplas e habilidades múltiplas para atuar de forma generalista diante das rápidas transformações da sociedade. Com mais de 50 anos de existência, o curso evoluiu e passou a priorizar a abordagem projetual, incorporando tendências contemporâneas e alinhando-se às necessidades do mercado de trabalho.
          </p>
          <button class="">Alguma ação</button>
        </div>
    
      </el-carousel-item>

      <el-carousel-item>
        <div class="max__width">
          <p>
            Ao longo dos anos, nosso curso construiu uma trajetória marcada por inovação, dedicação e transformação. Cada etapa dessa linha do tempo representa não apenas conquistas acadêmicas, mas histórias de alunos, professores e projetos que ajudaram a moldar nossa identidade. Da sua criação aos dias atuais, acompanhamos a evolução das metodologias, das estruturas e das oportunidades oferecidas, sempre com o compromisso de formar profissionais preparados para os desafios do futuro. Celebrar este aniversário é reconhecer o caminho percorrido e renovar o propósito de continuar crescendo, aprendendo e inspirando novas gerações.
          </p>
        </div>
      </el-carousel-item>

    </el-carousel>

    <!--  -->
    <el-carousel height="600px" :interval="4000">
      
      <el-carousel-item class="carrossel-3">
          <div class="max__width">
            <h3>Onde encontrar?</h3>
            <p>
              Petências amplas e habilidades múltiplas para atuar de forma generalista diante das rápidas transformações da sociedade. Com mais de 50 anos de existência, o curso evoluiu e passou a priorizar a abordagem projetual, incorp
            </p>
            <button class="">Alguma ação</button>
          </div>
      </el-carousel-item>

      <el-carousel-item class="carrossel-4">
        <div class="max__width">
          <h1>Lançamentos</h1>
          <p>Petências amplas e habilidades múltiplas para atuar de forma generalista diante das rápidas transformações da sociedade. Com mais de 50 anos de existência, o curso evoluiu e passou a priorizar a abordagem projetual, incorp</p>
        </div>
      </el-carousel-item>

    </el-carousel>


    <!-- Linha do tempo -->
    <section class="linha" id="linha-do-tempo">

      <div class="linha__width">
        <h1 class="g-h1">55 anos que estão marcados na história</h1>

        <p class="linha__text">Ao longo dos anos, nosso curso evoluiu, inovou e formou gerações de profissionais. Esta linha do tempo celebra cada conquista, marco e transformação que construíram nossa história e fortalecem nosso compromisso com o futuro.</p>
      </div>

      <img class="linha__img" src="/linha_do_tempo.jpg" width="1000" height="2000" alt="">

    </section>

    <!--  -->
    <section class="gente max__width" id="participe">
      <div class="gente__col_1">
        <p class="gente__55">55 DESIGN MACK <img class="gente__arrow" src="/arrow_black.svg" width="30" height="30" alt=""></p>
        
        <div class="gente__container">
          <p class="gente__gostou">Gostou?</p>
          <a :href="linkForms" target="_blank" class="gente__text">Participe com a gente!</a>
        </div>
      </div>

      <a :href="linkForms" target="_blank" class="gente__button background__gradient">
        <img src="/arrow.svg" width="30" height="30" alt="Acessar formulário de inscrição">
      </a>

    </section>

  </div>
</template>

<script>
import Banner from '@/components/home/Banner.vue'
import { linkForms, linkedin, instagram } from '@/constants/variables.js'

export default {
  name: 'Home',
  components: { Banner },
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

  }
}
</script>

<style scoped>
/* sobre */
.sobre {
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 100px 0;
}
.sobre__grafismo {
  position: absolute;
  width: min(14vw, 160px);
}
.sobre__width {
  max-width: 1000px;
  width: calc(100% - 500px);
  margin: auto;
}
.sobre__text {
  text-wrap: nowrap;
  font-size: 70px;
}
.sobre__right, .sobre__width {
  display: flex;
  gap: 100px;
  align-items: center;
}
.sobre__right .sobre__width {
  flex-direction: row-reverse;
}
.sobre__right .sobre__grafismo {
  right: 0;
}
/* mackenzie */
.mackenzie {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  height: 100vh;
}
.mackenzie__frase {
  display: flex;
  flex-direction: column;
}
.mackenzie__isso {
  line-height: 89%;
  font-size: 120px;
}
.mackenzie__p {
  font-size: 30px;
  width: 100%;
  text-align: center;
}
.mackenzie__55 {
  font-size: 30px;
  font-weight: 300;
  margin-top: 10px;
}
/* carrossel */
.carrossel-1, .carrossel-2 {
  display: flex;
  align-items: center;
}
.carrossel-1 {
  background-color: var(--black);
  color: white;
}
.carrossel-2 {

}
.carrossel-3 {
  background-color: var(--orange);
}
.carrossel-4 {
  background-color: var(--purple);
}
.carrossel-3, .carrossel-4 {
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: white;
}
/* linha do tempo */
.linha {
  width: 100%;
}
.linha__width {
  display: flex;
  flex-direction: column;
  width: calc(100% - 400px);
  margin: 100px auto;
  gap: 20px;
}
.linha__text {
  font-size: 20px;
}
.linha__img {
  width: 100%;
  object-fit: contain;
  height: max-content;
}
.mackenzie__ctn--arrow {
  width: 100%;
  display: flex;
  justify-content: center;
}
.mackenzie__arrow {
  margin: auto;
}
/* gente */
.gente {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 0;
  height: 660px;
}
.gente__col_1 {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}
.gente__text {
  font-size: 60px;
}
.gente__gostou {
  position: absolute;
  top: -30px;
  font-size: 28px;
}
.gente__container {
  position: relative;
  display: flex;
  flex-direction: column;
}
.gente__55 {
  display: flex;
  align-items: center;
  gap: 20px;
}
.gente__text::before {
  content: '';
  position: absolute;
  top: 100%;
  width: 100%;
  height: 1px;
  background: black;
}
.gente__arrow {
  animation: infinite 3s arrowSlide;
}
@keyframes arrowSlide {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  80% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}
.gente__button {
  display: flex;
  padding: 30px;
  border-radius: 50%;
  transition: .3s;
  border: none;
  cursor: pointer;
}
.gente__button:hover {
  box-shadow: 6px 10px 24px rgba(0, 0, 0, 0.2);
  transition: .2s;
}
@media screen and (max-width: 1200px) {
  .sobre__width {
    display: flex; 
    flex-direction: column !important;
    align-items: flex-start;
    gap: 0;
  }
  .mackenzie__isso {
    font-size: 12vw;
  } 
}
@media screen and (max-width: 1000px) {
  .mackenzie {
    gap: 40px;
    height: max-content;
  }
  .linha__width, .sobre__width {
    width: calc(100% - 40px);
  }
  .g-h1 {
    font-size: 40px;
  }
  .linha__text {
    font-size: 18px;
  }
  .gente, .gente__col_1 {
    flex-direction: column;
  }
  .gente {
    gap: 40px;
    height: max-content;
  }
}

</style>

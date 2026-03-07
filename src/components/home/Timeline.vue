<template>
  <div class="line">
    
    <div
      :class="`line__time ${index === 0 ? 'line__bubble' : ''} ${index % 2 == 0 ? 'line__left' : 'line__right'}`"
      v-for="(obj, index) in timeData"
    >
      
      <div class="line__circle"></div>
      
      <div class="line__container">
        <p class="line__ano">{{  obj.ano  }}</p>
        <p class="line__text">{{ obj.text }}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      timeData: [
        {
          ano: '1960',
          text: 'O design, no Brasil, surgiu com o processo de industrialização, incentivado na era desenvolvimentista de Juscelino Kubitschek entre as décadas de 1960 e 1970.',
        },
        {
          ano: '1963',
          text: ' fundação da Escola Superior de Desenho Industrial (Esdi) com a participação do artista suíço Max Bill e do argentino Tomás Maldonado',
        },
        {
          ano: '1969',
          text: 'Abertura do Curso Desenho Industrial na Faap',
        },
        {
          ano: 'Ao longo das décadas de 1970 e 1980',
          text: 'o curso de Desenho Industrial consolidou sua importância no cenário histórico do design no Brasil. Sendo um dos primeiros cursos criados no Estado de São Paulo, acompanhou de perto a evolução das discussões sobre o design no mundo',
        },
        {
          ano: '1970',
          text: '23 de setembro o Curso de Desenho Industrial e Comunicação Visual foram aprovados no Conselho Universitário da Universidade Mackenzie, Alexandre Wollner, formado pela Escola de Ulm foi personalidade presente e atuante na concepção desse curso',
        },
        {
          ano: '1972',
          text: 'Abertura das 1ªs turmas dos cursos de Desenho Industrial e Comunicação Visual. O currículo era de três anos oferecido nos períodos vespertino e noturno na Faculdade de Arquitetura no prédio Cristiano Stockler das Neves',
        },
        {
          ano: '1974',
          text: 'adotou o regime de período integral, combinando oficinas matinais com aulas expositivas à tarde',
        },
        {
          ano: '1978',
          text: 'Os cursos Desenho Industrial, Comunicação Visual foram para a Faculdade de Comunicação e Artes (FCA), atual Centro de Comunicação e Letras (CCL)',
        },
        {
          ano: '1980',
          text: 'Implementação dos departamentos de Artes e Técnicas Industriais e Ciências Gráficas. Entrada dos laboratórios: Cerâmica, Marcenaria, Fotografia, Maquetaria, Serigrafia e Gravura. O curso de Comunicação Visual foi descontinuado, tornando-se Desenho Industrial subdividido em duas habilitações básicas: Projeto de Produto e Programação Visual. 1ª reformulação com a introdução de novos conteúdos fundamentais para o desenvolvimento de projetos, disciplinas teóricas e práticas promovia um ambiente de intensa imersão acadêmica.',
        },
        {
          ano: '1984',
          text: 'fundação do Laboratório Brasileiro de Design Industrial (LBDI) em Florianópolis com o Conselho Nacional de Pesquisa e Desenvolvimento (CNPq) foi referência em termos de disseminação do conhecimento e de experiências na área do design nacional e internacional',
        },
        {
          ano: '1987',
          text: 'Ministério de Educação estabeleceu o currículo mínimo do ensino de design no Brasil com conjunto de conhecimentos próprios e específicos. Definiu o Desenhista Industrial como profissional que participa de projetos de produtos industriais, atuando nas fases de definição de necessidades, concepção e desenvolvimento do projeto, objetivando a adequação destes às necessidades do usuário e às possibilidades de produção.',
        },
        {
          ano: '1989',
          text: '2ª reformulação, alterou para 3.570 horas-aula, distribuídas ao longo de oito semestres no período noturno. O novo currículo do Curso de Desenho Industrial (DI) foi elaborado para assegurar uma formação básica sólida e padronizada para ambos os perfis profissionais, Programação Visual (PV) e Projeto de Produto (PP). Os componentes curriculares estruturados nos formatos teórico e prático, e classificados em quatro categorias: conteúdos teóricos; conteúdos de representação e expressão; conteúdos práticos laboratoriais; e conteúdos projetuais. Entrada de componentes Metodologia de Projeto, Materiais e Processos Gráficos, Desenvolvimento de Projeto de Produto (DPPP) e Desenvolvimento de Projeto e Programação Visual (DPPV) , além de Computação Gráfica entre outros',
        },
        {
          ano: '1986',
          text: 'Criação do Prêmio Design do Museu da Casa Brasileira',
        },
        {
          ano: '1989',
          text: 'fundação da Associação do Design Gráfico (ADG). Entrada do componente de TGI- Trabalho de Graduação Interdisciplinar',
        },
        {
          ano: '1990',
          text: ' marcou transformações impulsionadas pela globalização, e que redefiniram a economia, a educação e os diversos setores da sociedade. Esse período foi crucial para o amadurecimento do curso e de suas habilitações (Projeto de Produto e Programação Visual). Período marcado por premiações, congressos e eventos que impulsionaram a área de design',
        },
        {
          ano: '1994',
          text: 'TGI foi formulado em consonância com as diretrizes curriculares do Ministério da Educação e com o intuito de proporcionar um momento de reflexão sintética, abrangente, para a conclusão do curso com um projeto de qualidade. Ocorre 1º Congresso Brasileiro de Pesquisa e Desenvolvimento em Design (P&D Design.',
        },
        {
          ano: '2000',
          text: '3ª matriz curricular com a consolidação do design como um campo independente, o corpo  estruturou uma nova grade curricular, incorporando bases tecnológicas e enfatizando  computadorizados. A nova estrutura curricular contava com uma carga horária total de 3.420 , distribuídas em 228 créditos e um período de integralização de quatro anos',
        },
        {
          ano: '2002',
          text: 'fundação da Associação dos Designers de Produto (ADP). As DCN -Diretrizes curriculares nacionais publicada com parecer da reformulação do currículo para o ensino de graduação em Design, que estava em tramitação no MEC.',
        },
        {
          ano: '2004',
          text: '8 de março publicada DCN alterando a designação da área de “desenho industrial” para “design”. Definido o perfil, competências e habilidades do profissional em design, reafirmando a natureza projetual dessa área de conhecimento e seu caráter interdisciplinar. Instituíram o núcleo básico comum de conteúdos, específicos e teórico-práticos. Ampliou consideravelmente o campo do design, estabelecendo diretrizes tanto para a formação de profissionais preparados para o mercado de trabalho quanto para o desenvolvimento de negócios próprios',
        },
        {
          ano: '2004',
          text: ' UPM implementou o novo contrato para professores em períodos integral (docentes PPI) e parcial (docentes PPP) que fortaleceu as áreas de pesquisa e extensão',
        },
        {
          ano: '2005',
          text: 'Nova fase de gestão com coordenador de curso. Transferência do Curso de Desenho Industrial para Faculdade de Arquitetura e Urbanismo evidenciando a força da vocação projetual. Formação do D Design Possível, 1º projeto de extensão universitária no curso. ',
        },
        {
          ano: '2009',
          text: ' implantada a 4ª matriz curricular com 208 créditos e 2.652 horas-relógio. Esse processo envolveu a revisão de ementas e conteúdos programáticos, resultando na criação de novas disciplinas, na atualização de conteúdos e na reformulação dos títulos das matérias das duas habilitações (PP e PV), alinhando-se às demandas contemporâneas. Entrada do PI – Projeto integrado para fomentar a interdisciplinaridade entre os componentes curriculares de projeto da 3ª a 6ª etapa, visou o desenvolvimento do pensamento sistêmico uma abordagem que considera a interconexão e a complexidade de um sistema como um todo, em vez de se concentrar em partes isoladas.',
        },
        {
          ano: '2010',
          text: 'A nomenclatura “design” foi oficialmente adotada para o curso no Mackenzie',
        },
        {
          ano: '2013',
          text: ' a Secretaria de Regulação e Supervisão da Educação Superior, órgão do Ministério da Educação, renovou o reconhecimento do curso de Design da UPM',
        },
        {
          ano: '2014',
          text: ' Curso de Design com abordagem generalista com a extinção das habilitações PP e PV - Novo estudo do PPC - Projeto Pedagógico do Curso com a uma reestruturação no tempo de integralização do curso, reduzindo sua duração de quatro para três anos e meio, com um total de 2.400 horas. Curso organizado com 6 eixos temáticos e com 7 estúdios de projetos com 8 horas de duração.',
        },
        {
          ano: '2018',
          text: 'Reestruturação da matriz com a reintegração da 8ª etapa para o desenvolvimento de TCC',
        },
        {
          ano: '2020',
          text: 'Aniversário de 50 anos (festa realizada em 2022 devido ao Covid)',
        },
        {
          ano: '2022',
          text: ' Abertura de 40 vagas no período vespertino com a inovação de funcionamento da 1ª a 4ª etapa no vespertino e da 5ª a 8ª etapa no noturno. Esse formato oferece aos alunos mais flexibilidade para desenvolver o TCC e facilita a inserção no mercado de trabalho, permitindo a realização de estágios com maior autonomia',
        },
        {
          ano: '2025',
          text: 'Preparativos para o aniversário de 55 anos do Curso de Design Mackenzie',
        },
        {
          ano: '2026',
          text: 'Comemoração da A trajetória de 55 anos do Curso Design Mackenzie na Design Week no D&D de 04 a 22/03 com a abertura da Mostra 55 anos Design Mack e com Lançamento do livro do livro Desde a sua fundação, o curso de Design do Mackenzie formou profissionais atentos, dinâmicos e capacitados para atuar em diversas áreas, incluindo produção, serviços, consumo, experiência do usuário e mediação em diferentes interfaces sociais. Essa versatilidade fortalece a identidade do designer mackenzista como um agente essencial na transformação social, com presença destacada tanto no mercado nacional quanto no internacional.',
        },
      ]
    }
  }
}
</script>

<style>
:root {
  --timeline-color: var(--orange);
  --padding-text: 60px;
  --margin-absolute: -46px;
  --margin-mobile: 30px;
}
@media screen and (max-width: 1000px) {
  :root {
    --padding-text: 20px;
  }
}
</style>
<style scoped>
.line * {
  cursor: default !important;
}
.line {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 200px 0 100px 0;
}
.line::before {
  content: '';
  position: absolute;
  margin: auto;
  display: block;
  width: 10px;
  height: calc(100% - 100px);
  background-color: var(--timeline-color);
}
.line__container {
  width: 100%;
  min-width: 400px;
}
.line__time {
  display: flex;
  position: relative;
  width: 0;
}
.line__bubble::before {
  content: '';
  position: absolute;
  left: 20px;
  top: -154px;
  padding: 200px;
  border-radius: 50%;
  background: var(--timeline-color);
  opacity: 0.4;
}
.line__ano {
  position: relative;
  font-size: 24px;
  font-weight: 600;
}
.line__ano::before {
  content: '';
  position: absolute;
  width: 37px;
  top: 16px;
  height: 2px;
  background: var(--gray_01);
}
.line__left .line__ano::before {
  left: var(--margin-absolute);
}
.line__right .line__ano::before {
  right: var(--margin-absolute);
}
.line__text {
  font-size: 14px;
  overflow: auto;
}
.line__left {
  justify-content: flex-start;
}
.line__right {
  justify-content: flex-end;
}
.line__right .line__ano {
  text-align: end;
}
.line__circle {
  position: absolute;
  top: -6px;
  left: -21px;
  padding: 20px;
  border-radius: 50%;
  background: white;
  border: var(--timeline-color) solid 2px;
  transition: .3s;
  z-index: 3;
}
.line__left:hover .line__circle,  .line__right:hover .line__circle {
  background: var(--timeline-color) !important;
  transition: .3s;
}
.line__left .line__container {
  padding-left: var(--padding-text);
  z-index: 1;
  padding-right: var(--padding-text);
}
.line__right .line__container {
  padding-right: var(--padding-text);
}
@media screen and (max-width: 1000px) {
  .line {
    padding: 0;
  }
  .line::before {
    width: 6px;
  }
  .line__bubble::before {
    display: none;
  }
  .line__container {
    min-width: 48vw;
  }
  .line__circle {
    padding: 10px;
    left: -12px;
  }
  .line__ano {
    font-size: 18px;
  }
  .line__circle {
    top: 5px;
  }
  .line__left .line__ano {
    margin-left: var(--margin-mobile) !important;
  }
  .line__right .line__ano {
    margin-right: var(--margin-mobile) !important;
  }
}
</style>
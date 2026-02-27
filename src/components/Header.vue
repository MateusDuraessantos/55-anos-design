<template>
  <header class="background__gradient">
    <img class="logo" src="/logo_design_mack_d_55.svg" height="50" width="200" alt="Logo 55 anos curso de design">

    <div class="nav__options" id="navMenu" @click="close">
      <div class="options__nav" @click="scrollUp">
        <router-link to="/" class="dropdown-link">
          <aconra>Início <arrow>❯</arrow></aconra>
          <nav class="subMenu" id="subMenu">
            <a class="header__a" @click="scrollToSection('sobre')">Sobre</a>
            <a class="header__a" @click="scrollToSection('livro-55-anos')">Livro 55 anos</a>
            <a class="header__a" @click="scrollToSection('linha-do-tempo')">Linha do tempo</a>
            <a class="header__a" @click="scrollToSection('participe')">Participe</a>
          </nav>
        </router-link>
        <router-link class="dropdown-link" to="projetos">Projetos</router-link>

        <div class="nav-button--mobile">
          <hr class="hr" style="border-color: #1f1f1f">
          <br>
          <br>
        </div>

        <button class="button__close">✕</button>
      </div>
      <div class="background_nav"></div>
      <div class="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
    }
  },
  methods: {
    scrollUp(event) {
      if (event.target.classList[0] == 'router-link-active')
        setTimeout(() => {
          this.$nextTick(() => {
            window.scrollTo(0, 0);
          });
        }, 10);
    },
    //Ativa o menu lateral mobile
    close(event) {
      const nav = document.getElementById('navMenu')
      const elementClicked = event.target.classList[0]

      if (nav.classList[1] == undefined) nav.classList.add('ativar')
      else if (elementClicked == 'button__close' || elementClicked == 'background_nav' || elementClicked == 'router-link-active' || elementClicked == undefined) {

        nav.classList.add('opacityTransition')
        setTimeout(() => {
          nav.classList.remove('ativar')
          nav.classList.remove('opacityTransition')
        }, 400);
      }
    },

    //Leva o usuário até o link clicado
    scrollToSection(ancora) {
      setTimeout(() => {
        const section = document.getElementById(ancora);
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
        })
      }, 50);
    },
  }
}
</script>

<style scoped>
* {
  outline: none;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  padding: 0 50px;
  height: 80px;
  bottom: -80px;
  backdrop-filter: blur(5px);
  border-radius: 0 0 50px 50px;
  z-index: 10;
}
.logo {
  object-fit: contain;
  width: max-content;
}
.subMenu {
  position: absolute;
  display: none;
  top: 66px;
  flex-direction: column;
  white-space: nowrap;
  width: max-content;
  background: #1f1f1f;
  border-radius: 8px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.4);
  z-index: 1;
  overflow: hidden;
}
.header__a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  transition: .2s;
  min-height: 64px;
  border-bottom: 1px solid #4b4b4b;
  cursor: pointer;
  padding: 0.6vw 1.4vw;
  padding-right: 60px;
  width: 100%;
}
.header__a:hover {
  background: #2c2c2c;
  transition: .2s;
}
aconra {
  display: flex;
  flex-wrap: nowrap;
  gap: 14px;
}
arrow {
  transform: rotate(90deg);
  width: max-content;
}
/*  */
nav {
  position: sticky;
  top: -104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
  z-index: 11;
}
.red-bar {
  background: var(--red-mack);
  background: #2E2E2E;
  height: 44px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 14;
}
#nav-4 {
  background: #05547f;
  cursor: pointer;
  transition: .2s;
}
#nav-4:hover {
  background: #033B59;
  transition: .2s;
}
.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0 10px;
  width: 100%;
  white-space: nowrap;
  cursor: pointer;
}
.nav-button:hover {
  background: #7A1110;
}
.redes-sociais img {
  height: 18px;
}
.header__width {
  display: flex;
  align-items: center;
  width: calc(100% - 200px);
  justify-content: space-between;
  position: relative;
  z-index: 3;
  align-items: center;
  margin: auto;
}
.logo {
  height: 50px;
  object-fit: contain;
}
.nav__options {
  display: flex;
  align-items: center;
  gap: 50px;
}
.menu-icon span {
  display: block;
  position: relative;
  width: 100%;
  height: 2px;
  background: #d4d4d4;
  margin: 5px 0;
  transition: all 0.2s ease-in-out;
}
@media screen and (max-width: 1000px) {
  header {
    border-radius: 0 0 30px 30px;
    padding: 0 20px;
  }
  .subMenu {
    position: initial;
    display: block;
    flex-direction: column;
    white-space: nowrap;
    width: 100%;
    box-shadow: initial;
    overflow: initial;
    border-radius: 0;
    background: none;
  }
  .dropdown-link {
    height: max-content;
  }
}
</style>

<style>
.options__nav {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: max-content;
  background: none;
  gap: 40px;
}
.mobile,
.button__close,
.nav__options .menu-icon {
  display: none;
}
.dropdown-link {
  position: relative;
  flex-direction: column;
  justify-content: center;
  border: none;
  gap: 20px;
  text-decoration: none;
  color: white;
  height: 80px;
  font-weight: 400;
  transition: .3s;
  z-index: 3;
  display: flex;
}
.dropdown-link:hover {
  color: white;
  transition: .3s;
}
.dropdown-link:hover .subMenu {
  display: flex;
}
.el-dropdown-link {
  outline: none;
}
.el-popper.is-light .el-popper__arrow::before,
.el-dropdown-menu {
  border: none;
  background: #1E1E1E;
}
.el-dropdown__popper.el-popper {
  border: none;
  color: #8A8A8A;
  font-weight: 400;
}
.el-dropdown-menu__item {
  text-decoration: none;
  height: 40px;
  color: #8A8A8A;
}
.el-dropdown-menu__item:hover {
  background: #4F4F4F;
  color: white;
}
.el-popper.is-light {
  background: none;
}
.el-scrollbar {
  border-radius: 9px;
}
.router-link-active {
  color: white;
}
.options__nav .nav-button--mobile {
  display: none;
}
@keyframes opacitySuave {
  from {
    opacity: 0;
    transform: translatex(-30px);
  }
  to {
    opacity: 1;
    transform: translatex(0);
  }
}
@keyframes opacityRevert {
  from {
    opacity: 1;
    left: 0;
  }
  to {
    opacity: 0;
    left: -30px;
  }
}
@media screen and (max-width: 1000px) {
  .opacityTransition.ativar .options__nav,
  .opacityTransition.ativar .background_nav {
    animation-name: opacityRevert;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }
  .ativar .mobile,
  .ativar,
  .ativar .button__close,
  .nav__options .menu-icon {
    display: block;
  }
  .options__nav .nav-button--mobile {
    display: block;
  }
  .nav-button--mobile {
    margin-top: 58px;
  }
  .nav-button--mobile .nav-button {
    text-align: start;
    height: 50px;
    justify-content: flex-start;
    padding-left: 36px;
    border: none;
    background: #9c9c9c36;
    margin: 4px 0;
  }
  .nav-button--mobile .nav-button:hover {
    background: var(--red-mack);
  }
  .options__nav {
    display: none;
    animation-name: opacitySuave;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }
  .ativar .options__nav {
    position: relative;
    display: block;
    position: fixed;
    justify-content: flex-start;
    height: 100vh;
    background: black;
    left: 0;
    top: 0;
    flex-direction: column;
    width: 300px;
    gap: 0;
    overflow: auto;
    z-index: 3;
    padding-bottom: 50px;
    padding-right: 3px;
  }
  .ativar .mobile {
    margin: 24px;
  }
  .dropdown-link {
    padding: 26px;
    margin-bottom: 4px;
    background: #9c9c9c36;
  }
  .router-link-active {
    background: var(--red-mack);
  }
  .dropdown-link:hover {
    color: white;
    background: rgb(32, 32, 32);
  }
  .menu-icon {
    width: 24px;
    cursor: pointer;
  }
  .ativar .button__close {
    position: absolute;
    right: 20px;
    top: 12px;
    z-index: 3;
    color: gray;
    background: none;
    border: none;
    transition: .2s;
    cursor: pointer;
    z-index: 2;
  }
  .ativar .button__close:hover {
    color: white;
    transition: .2s;
  }
  .background_nav {
    display: none;
    width: 100vw;
    height: 100vh;
    background: rgba(2, 3, 0, 0.6);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .ativar .background_nav {
    display: block;
  }


}

</style>
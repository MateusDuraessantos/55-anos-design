<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  components: { Header, Footer },
  name: 'app',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
html {
  scroll-behavior: smooth;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}
* {
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
*::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background: transparent;
}
*::-webkit-scrollbar-track {
  display: none;
}
*::-webkit-scrollbar-thumb {
  background-color: #474747;
  border-radius: 6px;
}
a {
  color: var(--black);
  text-decoration: none;
}
body {
  position: relative;
  background: white;
  overflow-y: overlay;
  overflow-x: hidden;
}
.body {
  display: flex;
  justify-content: center;
}
.max__width {
  max-width: 1220px;
  width: calc(100% - 200px);
  margin: auto;
}
:root {
  --blue-mack: #00547F;
  --blue: #53B7E7;
  --pink: #E12991;
  --purple: #A15DB0;
  --yellow: #F6D809;
  --black: #1A1A1A;
  --orange: #F26D33;
  --red-mack: #E1001E;
  --white_00: #fafafa;
  --white_01: #e8e8e8;
  --gray_00: #535353;
  --gray_01: #afafaf;
}
.background__gradient {
  background-image: linear-gradient(90deg, var(--yellow), var(--orange), var(--pink), var(--purple), var(--blue));
}
.g-h1 {
  line-height: 110%;
  font-size: 60px;
  font-weight: 400;
} 
.shadow {
  position: absolute;
  z-index: 1;
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1));
  width: 100%;
  height: 100%;
}
hr {
  border: none;
  border-style: solid;
  border-color: #333333;
  border-width: 3px 0 0 0;
  margin-top: 10px;
}
@media only screen and (max-width: 1000px) {
  .max__width {
    width: calc(100% - 40px);
  }
  .g-h1 {
    font-size: 40px;
  }
}
</style>

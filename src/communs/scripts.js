export const scrollToSection = (ancora) => {
  //Leva o usuário até o link clicado
  setTimeout(() => {
    const section = document.getElementById(ancora);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    })
  }, 50);
}
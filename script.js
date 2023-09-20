const headerContent = document.querySelector('.header-content');
const menuLines = document.querySelector('.menu-lines');
const servicos = document.querySelector('.col__services');

menuLines.addEventListener('click', ()=> {
    menuLines.classList.toggle('ativar');
    headerContent.classList.toggle('ativar');
});
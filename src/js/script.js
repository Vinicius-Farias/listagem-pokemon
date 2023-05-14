const botaoAlterarTema = document.querySelector('#botao-alterar-tema');
const body = document.querySelector('body');
const imgMudaTema = document.querySelector('.imagem-botao');

botaoAlterarTema.addEventListener('click', () => {
    
    if(body.classList == '') {
        body.classList.add('modo-escuro');
        imgMudaTema.setAttribute('src', 'src/img/moon.png');
    } else {
        body.classList.remove('modo-escuro');
        imgMudaTema.setAttribute('src', 'src/img/sun.png');
    }
});
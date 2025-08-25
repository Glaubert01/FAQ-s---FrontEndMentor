const botao = document.querySelectorAll('.conteudo__icone-button');
const paragrafo = document.querySelectorAll('.conteudo__item-paragrafo');

botao.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        paragrafo[index].classList.toggle('hidden');
        if(paragrafo[index].classList.contains('hidden')) {
            btn.innerHTML = `<img class="conteudo__icone-img" src="assets/images/icon-plus.svg" alt="icone de mais">`
        } else {
            btn.innerHTML = `<img class="conteudo__icone-img" src="assets/images/icon-minus.svg" alt="icone de menos">`
        }
    });
});
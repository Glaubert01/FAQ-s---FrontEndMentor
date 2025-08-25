const botoes = document.querySelectorAll('.conteudo__icone-button');
const paragrafos = document.querySelectorAll('.conteudo__item-paragrafo');
const perguntas = document.querySelectorAll('.conteudo__paragrafo'); // <-- título da pergunta

function toggleItem(index, btn) {
    paragrafos[index].classList.toggle('hidden');
    if (paragrafos[index].classList.contains('hidden')) {
        btn.innerHTML = `<img class="conteudo__icone-img" src="assets/images/icon-plus.svg" alt="icone de mais">`
    } else {
        btn.innerHTML = `<img class="conteudo__icone-img" src="assets/images/icon-minus.svg" alt="icone de menos">`
    }
}

botoes.forEach((btn, index) => {
    btn.addEventListener('click', () => toggleItem(index, btn));
});

perguntas.forEach((pergunta, index) => {
    pergunta.addEventListener('click', () => toggleItem(index, botoes[index]));
});

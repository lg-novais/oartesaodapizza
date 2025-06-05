//NAVEGAÇÃO POR TAB
const catDestaques = document.querySelectorAll('.destaques-categorias li');
const pizzas = document.querySelectorAll('.pizzas');

if(catDestaques && pizzas){
    catDestaques[0].classList.add('ativo')
    pizzas[0].classList.add('ativo')
    //Ativa a categoria
function ativarCategoria(event){
    event.preventDefault();
    catDestaques.forEach((item) => {
        item.classList.remove('ativo')
    })
    this.classList.add('ativo')
}

catDestaques.forEach((item) => {
    item.addEventListener('click', ativarCategoria);
    item.addEventListener('touch', ativarCategoria);
})

//Ativa a sessão
function ativarSessao(index){
    pizzas.forEach((item) => {
        item.classList.remove('ativo')
    })
    pizzas[index].classList.add('ativo')
}

catDestaques.forEach((item, index) => {
    item.addEventListener('click', () => {
        ativarSessao(index)
    });
})
}


const elementoNome = document.getElementById('nome'); /* Cria a variável elementoNome e coloca o elemento com o id nome nela */
const elementoImg = document.querySelector('#imagem') /* Cria a variável elementoImg e coloca o elemento com o id imagem nela */
let elementoBtn = document.querySelector('#button') /* Cria a variável elementoBtn e coloca o elemento com o id alterar nela */

/* Adiciona o evento de click no elementoBtn e executa a função anonima (arrow function) */
elementoBtn.addEventListener('click', () =>{
    /* Verifica se o valour do botão é 'primeiro' */
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/img/specialized_evo.jpg' /* Troca a imagem */
        elementoNome.innerText = 'Specialized S-Works Evo' /* Altera o texto do elemento nome */
        elementoBtn.value = 'segundo' /* Altera valor do botão */
    } else if(elementoBtn.value == 'segundo') { /* Verifica se o valour do botão é 'segundo'*/
        elementoImg.src = './assets/img/scott_spark.jpg'  /* Troca a imagem */
        elementoNome.innerText = 'Scott Spark' /* Altera o texto do elemento nome */
        elementoBtn.value = 'terceiro'  /* Altera valor do botão */
    } else { /* Se os valores do botão não forem, 'primeiro'  */
        elementoImg.src = './assets/img/cannondale_scalpel.jpg' /* Troca a imagem */
        elementoNome.innerText = 'Cannondale HI Mod Ultimate' /* Altera o texto do elemento nome */
        elementoBtn.value = 'primeiro' /* Altera valor do botão */
    }
})
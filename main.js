function tocaSons (seletorAudio) {

const elemento = document.querySelector(seletorAudio);

if( elemento != null && elemento.localName === 'audio') {

    elemento.play();
    }
else {
    alert('Elemento não encontrado');
 }
       
}

const listaDeTeclas = document.querySelectorAll('.tecla'); // isso aqui seleciona todos os elementos da classe Tecla no HTML

// for (para)
for (let contador = 0; contador < listaDeTeclas.length; contador++) { 
// variaveis constantes
const tecla = listaDeTeclas[contador]
const instrumento = tecla.classList[1];

// template string
const idAudio = `#som_${instrumento}`;
// '#som_{instrumento}'

tecla.onclick = function () {
    tocaSons(idAudio);
    }  
tecla.onkeydown = function(evento) {

    if (evento.code ==='Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');

        }
    //if (evento.code === 'Enter') {
    //    tecla.classList.add('ativa');
   // }
    }
tecla.onkeyup = function() {
    tecla.classList.remove('ativa');
    }

}
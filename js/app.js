let frasesArray = ['para refeições', 'para convivios', 'com melhores bebidas', 'com melhores pratos'];
let contador = 0, indice = 0;
let textoActual = '', letras = '';


function escrever (){
    if (contador === frasesArray.length){
        contador = 0;
    }

    textoActual = frasesArray[contador];
    letras = textoActual.slice(0, ++indice);

    document.querySelector('.escrevendo-1').textContent = letras;

    if(letras.length === textoActual.length){
        contador++;
        indice = 0;
    }

    setTimeout(escrever, 200);
}

function navButtons (){
    var inicio = document.querySelector('.inicio-btn'),
        cardapio = document.querySelector('.carpadio-btn'),
        galeria = document.querySelector('.galeria-btn'),
        nossaEquipe = document.querySelector('.nossa-btn'),
        reserva = document.querySelector('.reserva-btn'),
        contactos = document.querySelector('.contactos-btn');

    cardapio.addEventListener('click', function(){
    navScroll("#reservas", 1000);
    });

    portifolio.addEventListener('click', function(){
        navScroll('#portifolio', 2000);
    });

    contactos.addEventListener('click', function(){
        navScroll('#contacto', 3000);
    });
}


function main(){
    escrever();
    navButtons();
}

main();


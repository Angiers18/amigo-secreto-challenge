let amigos = [];
let numeroSorteado = [];

let buttonReset = document.querySelector('.button-reset');

function agregarAmigo(){
    let nombre = document.querySelector("#amigo").value ;
    
    if(nombre === ''){

        alert('Por favor, inserte un nombre.');
        return;

    } else{
    
        amigos.push(nombre);
        limpiar();

        listaDeAmigos();
        return;
    }
}


function limpiar(){
    document.querySelector("#amigo").value = '';
    document.querySelector("#listaAmigos").innerHTML = '';
}


function listaDeAmigos(){
    let lista = document.querySelector("#listaAmigos");
    
    
    for(let i = 0; i < amigos.length; i++){
        li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    
    return lista;
}

function sortearAmigo(){
    
    if(amigos.length === 0){
        alert('Por favor, inserte un nombre.');
        return;
    }

    let seleccionado = amigos[Math.floor(Math.random() * amigos.length)];


    if (numeroSorteado.length === amigos.length){
        let resultado = document.querySelector("#resultado");
        resultado.textContent = '¡Todos los amigos fueron sorteados!';
        document.querySelector('.button-reset').disabled = false;
        document.querySelector('.button-reset').classList.add("enabled");
        document
        return;

    } else if (numeroSorteado.includes(seleccionado)){
        sortearAmigo();
        return;

    }else{
        resultado.textContent = seleccionado;
        numeroSorteado.push(seleccionado);
        
        return;
    }
}

function reset(){
    amigos = [];
    numeroSorteado = [];
    
    document.querySelector("#listaAmigos").innerHTML = '';
    document.querySelector("#resultado").innerHTML = '';
    
    buttonReset.disabled = true;
    buttonReset.classList.remove("enabled");
    buttonReset.classList.add("disabled");
    return;

}


let agregarNombre = document.querySelector("#amigo");
agregarNombre.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.querySelector(".button-add").click();
    }
})

let amigos = [];

function agregarAmigo(){

    let nombre = document.querySelector("#amigo").value ;
    if(nombre === ''){

        alert('Por favor, inserte un nombre.');
        limpiar();
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
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }

    return lista;
}

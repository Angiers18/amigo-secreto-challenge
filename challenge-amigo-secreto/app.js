let amigos = [];

function agregarAmigo(){

    let nombre = document.querySelector("#amigo").value ;
    if(nombre === ''){
        alert('Por favor, inserte un nombre.');
        limpiarInput();
        return;
    } else{    amigos.push(nombre);
    console.log('Array', amigos);
    limpiarInput();
    return;
    }
}

function limpiarInput(){
    document.querySelector("#amigo").value = '';
    }

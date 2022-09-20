const inputTexto = document.querySelector(".mensaje")
const resultado1 = document.querySelector(".resultado")

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const TextoSecreto = encriptar(inputTexto.value)
    resultado1.value = TextoSecreto;
    resultado1.style.backgroundImage = "none"
    document.getElementById("negrita").style.display = "none";
    document.getElementById("normal").style.display = "none";
    inputTexto.value = ""
}

function btnDesencriptar(){

    const TextoSecreto = desencriptar(inputTexto.value)
    resultado1.value = TextoSecreto
    inputTexto.value = ""
    resultado1.style.backgroundImage = "none"
    document.getElementById("negrita").style.display = "none";
    document.getElementById("normal").style.display = "none";
    inputTexto.value = ""
}


function encriptar(stringEncriptada){
    let matrizprincipal = [["e", "enter"], ["i" ,"imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for( let i = 0; i < matrizprincipal.length; i++){
        if(stringEncriptada.includes(matrizprincipal[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizprincipal[i][0],matrizprincipal[i][1])
        }

    }
    return stringEncriptada
}

/*
function btnDesencriptar(){

    const TextoSecreto = desencriptar(resultado1.value)
    resultado1.value = TextoSecreto
    inputTexto.value = ""

}
 */


function desencriptar(stringDesencriptada){
    let matrizprincipal = [["e", "enter"], ["i" ,"imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for( let i=0; i < matrizprincipal.length; i++){
        if(stringDesencriptada.includes(matrizprincipal[i][1]))
        {

            stringDesencriptada = stringDesencriptada.replaceAll(matrizprincipal[i][1],matrizprincipal[i][0])
        }

    }
    
    return stringDesencriptada;

}

function copiar(){
    resultado1.select()
    navigator.clipboard.writeText(resultado1.value)
    resultado1.style.backgroundImage = "url(logos/saitama.png)";
    document.getElementById("negrita").style.display = "block";
    document.getElementById("normal").style.display = "block";
    resultado1.value = ""



}
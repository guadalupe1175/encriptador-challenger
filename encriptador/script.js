const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const button = document.querySelector(".btncopiar");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage="none";


}


function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u","ufat"]]
    

    for (let i = 0; i<matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(
                matrizCodigo[i][0], matrizCodigo[i][1]
            )
        }
    }
    return stringEncriptado
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

}

function desencriptar(stringdesencriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u","ufat"]]
   

    for (let i = 0; i<matrizCodigo.length; i++){
        if (stringdesencriptado.includes(matrizCodigo[i][1])){
            stringdesencriptado=stringdesencriptado.replaceAll(
                matrizCodigo[i][1], matrizCodigo[i][0]
            )
        }
    }
    return stringdesencriptado
}

async function btncopiar(){
 const textoEncriptado = desencriptar(mensaje.value)
mensaje.select();
await navigator.clipboard.writeText(mensaje.value);


}
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
	const textoEncriptado = encriptar(textArea);
	mensaje.value = textoEncriptado;
	textArea.value = "";
	mensaje.style.backgroundImage = "none";
} 

function encriptar(stringEncriptada) {
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	stringEncriptada = stringEncriptada.value.toLowerCase();

	for (let i = 0 ; i < matrizCodigo.length ; i++) {
		stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

	}
	return stringEncriptada;
}

function btnDesencriptar(){
	const textoDesencriptado = desencriptar(textArea);
	mensaje.value = textoDesencriptado;
	textArea.value = "";
}

function desencriptar(stringEncriptada) {
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	stringEncriptada = stringEncriptada.value.toLowerCase()

	for (let i = 0 ; i < matrizCodigo.length ; i++) {
		stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

	}
	return stringEncriptada;
}

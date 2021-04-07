const inputBinario = document.querySelector("#binario");
const inputDecimal = document.querySelector("#decimal");
const inputOctal = document.querySelector("#octal");
const inputHexadecimal = document.querySelector("#hexadecimal");

function binario() {
	const inputBinarioValue = inputBinario.value;

	if (inputBinarioValue != "") {
		for (let i of inputBinarioValue) {
			if (i == 1 || i == 0) {
				inputBinario.style.outlineColor = "black";

				inputDecimal.value = parseInt(inputBinarioValue, 2);
				inputOctal.value = parseInt(inputBinarioValue, 2).toString(8);
				inputHexadecimal.value = parseInt(inputBinarioValue, 2)
					.toString(16)
					.toUpperCase();
			} else {
				inputBinario.style.outlineColor = "red";

				inputDecimal.value = "";
				inputOctal.value = "";
				inputHexadecimal.value = "";
				return;
			}
		}
	} else {
		inputDecimal.value = "";
		inputOctal.value = "";
		inputHexadecimal.value = "";
	}
}

function decimal() {
	const inputDecimalValue = inputDecimal.value;

	if (inputDecimalValue != "") {
		inputBinario.value = parseInt(inputDecimalValue, 10).toString(2);
		inputOctal.value = parseInt(inputDecimalValue, 10).toString(8);
		inputHexadecimal.value = parseInt(inputDecimalValue, 10)
			.toString(16)
			.toUpperCase();
	} else {
		inputBinario.value = "";
		inputOctal.value = "";
		inputHexadecimal.value = "";
		return;
	}
}

function octal() {
	const inputOctalValue = inputOctal.value;

	if (inputOctalValue != "") {
		for (let i of inputOctalValue) {
			if (i != 8 && i != 9) {
				inputOctal.style.outlineColor = "black";

				inputBinario.value = parseInt(inputOctalValue, 8).toString(2);
				inputDecimal.value = parseInt(inputOctalValue, 8).toString(10);
				inputHexadecimal.value = parseInt(inputOctalValue, 8)
					.toString(16)
					.toUpperCase();
			} else {
				inputOctal.style.outlineColor = "red";

				inputBinario.value = "";
				inputDecimal.value = "";
				inputHexadecimal.value = "";
				return;
			}
		}
	} else {
		inputBinario.value = "";
		inputDecimal.value = "";
		inputHexadecimal.value = "";
		return;
	}
}

function hexadecimal() {
	const inputHexadecimalValue = inputHexadecimal.value.toUpperCase();

	function verifica(caracter) {
		const verificaArr = ['A', 'B', 'C', 'D', 'E', 'F'];

		return verificaArr.some((item) => item == caracter) || !isNaN(parseFloat(caracter)) && isFinite(caracter);
	}

	if (inputHexadecimalValue != "") {
		for (let i of inputHexadecimalValue) {
			if (verifica(i)) {
				console.log('sim');

				inputHexadecimal.style.outlineColor = "black";

				inputBinario.value = parseInt(inputHexadecimalValue, 16).toString(2);
				inputDecimal.value = parseInt(inputHexadecimalValue, 16).toString(10);
				inputOctal.value = parseInt(inputHexadecimalValue, 16).toString(8);
			} else {
				console.log('nao');
				inputHexadecimal.style.outlineColor = "red";

				inputDecimal.value = "";
				inputOctal.value = "";
				inputBinario.value = "";
				return;
			}
		}
	} else {
		inputDecimal.value = "";
		inputOctal.value = "";
		inputBinario.value = "";
	}
}

inputBinario.addEventListener("keyup", binario);
inputDecimal.addEventListener("keyup", decimal);
inputOctal.addEventListener("keyup", octal);
inputHexadecimal.addEventListener("keyup", hexadecimal);
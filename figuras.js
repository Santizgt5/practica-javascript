const inputsC = document.querySelectorAll('#formulario-c input');
const inputsT = document.querySelectorAll('#formulario-t input');
const inputsI = document.querySelectorAll('#formulario-i input');

const validadFormulario = (e) => {
    switch(e.target.name) {
        case 'ladoC':
            if(e.target.value == '') {
                document.getElementById('inputCuadrado').classList.add('input-incorrecto')
                document.getElementById('labelCuadrado').classList.add('label-incorrecto')
            } else {
                document.getElementById('inputCuadrado').classList.remove('input-incorrecto')
                document.getElementById('labelCuadrado').classList.remove('label-incorrecto')
            }
        break;
        case 'lado1':
            if(e.target.value == '') {
                document.getElementById('lado1').classList.add('input-incorrecto')
                document.getElementById('label-lado1').classList.add('label-incorrecto')
            } else {
                document.getElementById('lado1').classList.remove('input-incorrecto')
                document.getElementById('label-lado1').classList.remove('label-incorrecto')
            }
        break;
        case 'lado2':
            if(e.target.value == '') {
                document.getElementById('lado2').classList.add('input-incorrecto')
                document.getElementById('label-lado2').classList.add('label-incorrecto')
            } else {
                document.getElementById('lado2').classList.remove('input-incorrecto')
                document.getElementById('label-lado2').classList.remove('label-incorrecto')
            }
        break;
        case 'base':
            if(e.target.value == '') {
                document.getElementById('base').classList.add('input-incorrecto')
                document.getElementById('label-base').classList.add('label-incorrecto')
            } else {
                document.getElementById('base').classList.remove('input-incorrecto')
                document.getElementById('label-base').classList.remove('label-incorrecto')
            }
        break;
        case 'altura':
            if(e.target.value == '') {
                document.getElementById('altura').classList.add('input-incorrecto')
                document.getElementById('label-altura').classList.add('label-incorrecto')
            } else {
                document.getElementById('altura').classList.remove('input-incorrecto')
                document.getElementById('label-altura').classList.remove('label-incorrecto')
            }
        break;
        case 'radio':
            if(e.target.value == '') {
                document.getElementById('radio').classList.add('input-incorrecto')
                document.getElementById('label-radio').classList.add('label-incorrecto')
            } else {
                document.getElementById('radio').classList.remove('input-incorrecto')
                document.getElementById('label-radio').classList.remove('label-incorrecto')
            }
        break;
    }
}

inputsC.forEach((input) => {
    input.addEventListener('blur', validadFormulario); 
});
inputsT.forEach((input) => {
    input.addEventListener('blur', validadFormulario); 
});
inputsI.forEach((input) => {
    input.addEventListener('blur', validadFormulario); 
});


//Código del cuadrado

function perimetroCuadrado( lado ) {
    return  lado * 4;
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado( lado ) {
    return Math.pow(lado, 2);
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2" );

//Código del triángulo
// console.group("Triángulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 + 
//     "cm, " 
//     +ladoTriangulo2 + 
//     " cm, " 
//     +baseTriangulo + 
//     " cm "
//     );

// const alturaTriangulo = 5.5;

// console.log("La altura del triángulo es de: " + alturaTr iangulo + "cm");

function perimetroTriangulo(lado1, lado2,  base){
    return lado1 + lado2 + base;
}

// console.log("El perímetro del triángulo es de : " + perimetroTriangulo + "cm");

function areaTriangulo( base, altura) {
    return (base * altura) / 2;
}

// console.log("El area del triángulo: " + areaTriangulo + "cm^2" );


//Código del círculo

//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diámetro
// const diametroCirculo = radioCirculo * 2;;
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm");
function diametroCirculo(radio) {
    return radio * 2;
}
//PI
const PI = Math.PI;
//Circurferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// const perimetroCirculo = PI * diametroCirculo;
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

//Area
// const areaCirculo = Math.pow(radioCirculo, 2) * PI;
function areaCirculo(radio) {
 return Math.pow(radio, 2) * PI;
}
// console.log("El área del circulo es: "+ areaCirculo + "cm^2");




//Interacción con el HTML
let resultadoCuadrado = 0;
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    if(value !== '') {
        resultadoCuadrado = perimetroCuadrado(value);
        document.getElementById('p-perimetro-c').style.display = 'block';
        document.getElementById('cm-c').style.display = 'block';
        document.getElementById('p-area-c').style.display = 'none';
        document.getElementById('cm2-c').style.display = 'none';
        let obj = document.getElementById('resultadoCuadrado');
        obj.innerHTML = resultadoCuadrado;
    }

}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    if(value !== '') {
        resultadoCuadrado = areaCuadrado(value);
        document.getElementById('p-perimetro-c').style.display = 'none';
        document.getElementById('cm-c').style.display = 'none';
        document.getElementById('p-area-c').style.display = 'block';
        document.getElementById('cm2-c').style.display = 'block';
        let obj = document.getElementById('resultadoCuadrado');
        obj.innerHTML = resultadoCuadrado;
    }
}

let resultadoTriangulo = 0;
function calcularPerimetroTriangulo() {

    const lado1 = document.getElementById("lado1");
    const lado2 = document.getElementById("lado2");
    const base = document.getElementById("base");

    if(lado1.value !== '' && lado2.value !== '' && base.value !== '') {
        const value1 = parseInt(lado1.value);
        const value2 = parseInt(lado2.value);
        const value3 = parseInt(base.value);
        resultadoTriangulo = perimetroTriangulo(value1, value2, value3);
        document.getElementById('p-perimetro-t').style.display = 'block';
        document.getElementById('cm-t').style.display = 'block';
        document.getElementById('p-area-t').style.display = 'none';
        document.getElementById('cm2-t').style.display = 'none';
        let obj = document.getElementById('resultadoTriangulo');
        obj.innerHTML = resultadoTriangulo;
    }
    
}

function calcularAreaTriangulo() {
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;

    if(altura !== '' && base !== '') {
        resultadoTriangulo = areaTriangulo(base, altura);
        document.getElementById('p-perimetro-t').style.display = 'none';
        document.getElementById('cm-t').style.display = 'none';
        document.getElementById('p-area-t').style.display = 'block';
        document.getElementById('cm2-t').style.display = 'block';
        let obj = document.getElementById('resultadoTriangulo');
        obj.innerHTML = resultadoTriangulo;
    }

}

let resultadoCirculo = 0;
function calcularAreaCirculo() {
    const radio = document.getElementById("radio").value;

    if(radio !== '') {
        resultadoCirculo = areaCirculo(radio);
        document.getElementById('p-perimetro-i').style.display = 'none';
        document.getElementById('cm-i').style.display = 'none';
        document.getElementById('p-area-i').style.display = 'block';
        document.getElementById('cm2-i').style.display = 'block';
        let obj = document.getElementById('resultadoCirculo');
        obj.innerHTML = resultadoCirculo;
    }
}


function calcularPerimetroCirculo() {
    const radio = document.getElementById("radio").value;

    if(radio !== '') {
        resultadoCirculo = perimetroCirculo(radio);
        document.getElementById('p-perimetro-i').style.display = 'block';
        document.getElementById('cm-i').style.display = 'block';
        document.getElementById('p-area-i').style.display = 'none';
        document.getElementById('cm2-i').style.display = 'none';
        let obj = document.getElementById('resultadoCirculo');
        obj.innerHTML = resultadoCirculo;
    }
}


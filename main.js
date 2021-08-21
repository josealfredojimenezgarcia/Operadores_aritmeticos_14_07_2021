// OPERACIONES ARITMETICAS

// let num1= 8-2*5;
// console.log(num1);
// let num;
// num=((1+3)*3**2/2-2**3)
// console.log(num);

// let num2;
// num2=((8-2*5+8%2/3))
// console.log(num2);

// debugger;

// let num=0;
// //Post Incremento
// num ++;
// num ++;
// num ++;
// num ++;
// num ++;
// num ++;

// console.log(num);

// let num=9;
// let num1=2;
// //Post Incremento
// num ++;
// num ++;
// num1 ++;
// num ++;
// num1 ++;
// num ++;

// console.log(num);

// let num=9;
// let num1=2;
// //Pre Incremento
// ++num;
// ++num1;
// ++num;
// ++num;
// ++num1;
// ++num;

// console.log(++num);
// console.log(++num1);

// let num=0;
// let num1=2;
// //Post Decremento
// num--;
// num1--;


// console.log(num--);
// console.log(num1--);

// let num=0;
// let num1=2;
// //Pre Decremento
// --num;
// --num1;


// console.log(--num);
// console.log(--num1);


// let num=-5;
// let num1=-2;
// //Unari negativo
// //Unari positivo
// num=-num;
// num1=+num1;
// console.log(num);
// console.log(num1);

// Prioridad de operadores
// 1. Parentesis, 
// 2. Módulo %, Potenciación, Radicación
// 3. División /
// 3. Multiplicación *
// 4. Suma  +
// 4. Resta -


// Educación Continua UNC-cuatro20:45
//Pedir 2 datos por pantalla y almacenarlo en dos variables 
//diferentes:
//Variable 1(num1)  Variable 2 (num2)
//Realizar todas las Operacion arigameticas vistas en la clase
//Mostra en la consola todos los posibles resultados
//Extra: Por medio de una venta emergente(alert) Dar la maxima
//informacion del desarrallodar del aplicativo en cuestion

// function k() {
// document.getElementById("conector").innerHTML=("Dios me da la sabiduría espiritual y terrenal");
// document.getElementById("conector1").innerHTML=("Programa que realiza operaciones aritméticas básicas");
// }

// num1= ((5+3)*3**2/2-2**3+5^3)

// num2= ((5+3)*3**2/2-2**3+5^3)

alert("Soy José Alfredo Jimenez, estudiante de Ingeniería Ambiental UNAD"+
        "también estudiantes de programación en Comfenalco Santander", + "Este software muestra los operadores aritmético y realiza suma para dos variables entradas por teclas")

let Suma= function(num1,num2) {
    let x=parseFloat(document.getElementById("num1").value)
    let y=parseFloat(document.getElementById("num2").value)
    let z=x+y
    document.getElementById('result').innerHTML=z;
}
let Resta= function(num1,num2) {
        let x=parseFloat(document.getElementById("num1").value)
        let y=parseFloat(document.getElementById("num2").value)
        let z=x-y
        document.getElementById('result').innerHTML=z;
    // document.getElementById('result').innerHTML=y;
}
let Multiplicacion= function(num1,num2) {
    let x=parseFloat(document.getElementById("num1").value)
    let y=parseFloat(document.getElementById("num2").value)
    let z=x*y
    document.getElementById('result').innerHTML=z;
}
let Division= function(num1,num2) {
    let x=parseFloat(document.getElementById("num1").value)
    let y=parseFloat(document.getElementById("num2").value)
    let z=((x/y).toFixed(2))
    document.getElementById('result').innerHTML=z;
}
let Potencia= function(num1,num2) {
    let x=parseFloat(document.getElementById("num1").value)
    let y=parseFloat(document.getElementById("num2").value)
    let z=x**y
    document.getElementById('result').innerHTML=z;
}
let Modulo= function(num1,num2) {
    let x=parseFloat(document.getElementById("num1").value)
    let y=parseFloat(document.getElementById("num2").value)
    let z=x%y
    document.getElementById('result').innerHTML=z;
}
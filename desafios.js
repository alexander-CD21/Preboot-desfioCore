//1.Imprime números enteros de 1 a x. Si x es menor que 1, retorna false.
function imprimeHasta(x) {
    if(x<1){
        return false; 
    }
    for( let i=1; i<=x ;i++){
        console.log(i);
    }
}
imprimeHasta(100); // debe imprimir todos los enteros desde el 1 hasta el 1000000
y = imprimeHasta(-10); 
console.log(y); // debe imprimir false

//2.Imprime todos los enteros desde el 0 hasta el 255. Con cada entero, debes imprimir la suma de todos hasta ese punto. Retorna la suma final.
function printSum(x) {
    var sum = 0;
    for(let i=0;i<=x;i++){
        sum+=i;
        console.log("contador:",i);
        console.log("suma parcial",sum);
    }
    return sum;
}
y = printSum(255) // debe imprimir todos los enteros desde el 0 hasta el 255, y la suma parcial en cada punto
console.log("Suma total:", y) // debe imprimir 32640
//3.La función debe imprimir la suma de todos los valores en el arreglo dado:
function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum+= x[i]
    }
    return sum;
}
console.log( "la suma total:",printSumArray([1,2,3]) ); // debe imprimir 6

//4.Escribe una función que retorne el elemento mayor del arreglo dado:
function mayorElem(x) {
    var mayorHastaAhora = x[0];
    for(let i=0;i<x.length;i++){
        if ( x[0]<x[i]){
            mayorHastaAhora=x[i];
        }
    }
    return mayorHastaAhora;
}
console.log( mayorElem([8,3,11,2,-8]) ); // debe imprimir 11
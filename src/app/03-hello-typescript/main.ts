var myVariable = "Minha Variável";

function myFunction(x: number, y: number) {
    return x + y
}

//ES 6 ou ES 2015
let num = 2;
const PI = 3.14;

var numbers = [1, 2, 3];
numbers.map((value) => {
    return value * 2;
})

numbers.map(function(value) {
    return value * 2;
})

class Mathematic {
    soma (x: number, y: number) {
        return x + y;
    }
}

// js classico
// var n1 = 'string 1';
// n1 = 4;

var n1: any = 'string 1';
n1 = 4;

// pesquisar sobre interfaces

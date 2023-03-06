/*
    Replicați funcționalitatea Mioriței, folosind obiecte.
    Miorița se află într-o stână infinită.
    Implementează metoda move() pentru a o face pe Miorița să se deplaseze în orice direcție
*/

const miorita = {
    x: 0,
    y: 0,
    move: function(moveX, moveY) {
        x += moveX;    
        y += moveY;
        moveX= x;
        moveY= y;
        }
    };
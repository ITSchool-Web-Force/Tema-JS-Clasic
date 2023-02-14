/*
    Scrie o funcție care primește ca parametru un număr și întoarce un calificativ.
    Încearcă să scrii cât mai puține instrucțiuni.
    
    Calificative:
    10: FB
     9: FB
     8: B
     7: B
     6: S
     5: S
     4: IS
     3: IS
     2: IS
     1: IS
*/


const miorita = {
    x: 0,
    y: 0,
    move: function(moveX, moveY) {
        miorita.x += moveX;
        miorita.y +=  moveY;
    }
};
    
miorita.move(1, 3);
console.log(miorita.x, miorita.y);
// 1 3

miorita.move(1, -4);
console.log(miorita.x, miorita.y);
// 2 -1
miorita.move(5, 10);
console.log(miorita.x, miorita.y);
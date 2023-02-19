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

let calificativ = function (nota) {
  if (nota < 5) {
    return "IS";
  }
  if (nota < 7) {
    return "S";
  }
  if (nota < 9) {
    return "B";
  } return "FB";
};

console.log(calificativ(1));
console.log(calificativ(2));
console.log(calificativ(3));
console.log(calificativ(4));
console.log(calificativ(5));
console.log(calificativ(6));
console.log(calificativ(7));
console.log(calificativ(8));
console.log(calificativ(9));
console.log(calificativ(10));

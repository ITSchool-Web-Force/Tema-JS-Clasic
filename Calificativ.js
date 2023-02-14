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
function catalog(nota) {
  if (nota > 0 && nota < 5) {
    return "IS";
  }
  if (nota > 4 && nota < 7) {
    return "S";
  }
  if (nota > 6 && nota < 9) {
    return "B";
  }
  if (nota > 8 && nota < 11) {
    return "FB";
  } else return "Ai introdus o valoare gresita!";
}

console.log(catalog(78));
console.log(catalog(1));
console.log(catalog(2));
console.log(catalog(3));
console.log(catalog(4));
console.log(catalog(5));
console.log(catalog(6));
console.log(catalog(7));
console.log(catalog(8));
console.log(catalog(9));
console.log(catalog(10));
console.log(catalog(-1));

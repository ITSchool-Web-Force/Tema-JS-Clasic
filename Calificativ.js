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

function num(i) {
  let result;
    if (i > 0) {
      result = 'IS';
    } 
    if (i > 4) {
      result = 'S';
    }
    if (i > 6) {
      result = 'B';
    }
    if (i > 8) {
      result = 'FB';
    }
      return result;
}
  
console.log("Calificativul obtinut este:",num(9));


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
function getCalificative(grade) {
    let calificative;
    
    if (grade >= 9) {
      calificative = 'FB';
    }
    else if (grade >= 7) {
      calificative = 'B';
    }
    else if (grade >= 5) {
      calificative = 'S';
    }
    else {
      calificative = 'IS';
    }
    
    return calificative;
  };

let finalCalificative = getCalificative(9);
console.log(finalCalificative);
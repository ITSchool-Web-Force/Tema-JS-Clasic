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
function gradeExchange(grade) {
  if (grade === 10 || grade === 9) return "FB";
  if (grade === 8 || grade === 7) return "B";
  if (grade === 6 || grade === 5) return "S";
  if (grade > 0 && grade <= 4) return "IS";
  return "Invalid number, please try again!";
}
console.log(gradeExchange(9));

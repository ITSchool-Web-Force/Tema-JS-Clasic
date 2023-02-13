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

function calificativ() {
  if (input == 9 || input == 10) {
    console.log("Foarte bine");
  } else if (input == 8 || input == 7) {
    console.log("Bine");
  } else if (input == 6 || input == 5) {
    console.log("Suficient");
  } else {
    console.log("Insuficient");
  }
}

calificativ();

// daca mai trebuie sa fac alta varianta si sa incerc ceva mai simplu, sa mi spui am incercat ceva diferit aici

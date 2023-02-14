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


function calificative(nota) {
    if (nota > 8 && nota <11) {
        return("FB");
    }
    else if (nota > 6 && nota < 9 ) {
        return("B");
    }
    else if (nota > 4 && nota < 7 ) {
        return("S");
    }
    else if (nota > 0 && nota < 5 ) {
        return("IS");
    } 
    else return ("Calificativul nu a fost gasit")
}
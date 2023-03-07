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
 function calificativ(a) {
    if(a > 8 && a <= 10) {
        return "FB";
    } else if(a > 6) {
        return "B";
    } else if(a > 4) {
        return "S";
    } else if(a > 1) {
        return "IS";
    } else {
        return `${a} nu este valid`
    }
 }
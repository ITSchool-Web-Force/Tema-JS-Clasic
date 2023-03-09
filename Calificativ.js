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

function Note (nota) {

    if (nota<1 || nota>10){
        return "error"
    }
    
    if (nota==10 || nota==9){
        return "FB"
    }

    if (nota==8 || nota==7){
        return "B"
    }

    if (nota==6 || nota==5){
        return "S"
    }
    
    return "IS"

}
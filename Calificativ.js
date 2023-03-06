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
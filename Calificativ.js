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
function get_a_grade(mark){

    if(mark >= 9){
        return "FB";
    }else if(mark >= 7){
        return "B";
    }else if(mark >= 5){
        return "S";
    }else if(mark >= 1){
        return "IS";
    }else{
        return "Notele pot fi doar de la 1 la 10.";
    }
};
let the_grade = get_a_grade(10);
console.log(the_grade);

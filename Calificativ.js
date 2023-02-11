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

for (let i = 10; i >0; i-- )
    {
    if (i > 8 ) 
        { 
        console.log( "FB");
        }
    else if (i > 6 ) 
        {
        console.log("B");
        }
    else if (i > 4) 
        {
        console.log("S"); 
        }
    else 
        {
        console.log("IS")
        }
}

// varianta 2 

for (let i = 10; i > 0; i--) {
switch (i) {
    case 10:
    case 9:
        console.log("FB");
        break;
    case 8:
    case 7:
        console.log("B");
        break;
    case 6:
    case 5:
        console.log("S");
        break;
    default:
        console.log("IS");
    }
}
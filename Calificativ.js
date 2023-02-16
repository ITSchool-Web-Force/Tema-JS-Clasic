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

function cal_from_nr(number)
{
    var cal = {10: 'FB', 9: 'FB', 8: 'B', 7: 'B', 6: 'S', 5: 'S', 4: 'IS', 3: 'IS', 2: 'IS', 1: 'IS'}
    if(number in cal)
        return cal[number]
    else
        return 'numarul nu e bun'
}

console.log(cal_from_nr(5.9))

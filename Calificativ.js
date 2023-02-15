
let i;
function nota(i) {
    let calificativ;

    if (i < 5) {
        calificativ = 'IS';
      } 
      if (i == 5 || i == 6 ) {
        calificativ = 'S';
      }
      if (i == 7 || i == 8) {
        calificativ = 'B';
      }
      if (i > 8) {
        calificativ = 'FB';
    }
    return calificativ;


}

console.log("nota:", 5," reprezinta calificativul: ",nota(5));
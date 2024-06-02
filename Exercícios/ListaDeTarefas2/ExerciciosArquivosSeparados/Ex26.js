/* Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5]. */


function multiplicarMatrizes(A, B) {
   
    let P = [];
    for (let i = 0; i < A.length; i++) {
      P[i] = [];
      for (let j = 0; j < B[0].length; j++) {
        P[i][j] = 0;
      }
    }
  
    
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < B[0].length; j++) {
        for (let k = 0; k < A[0].length; k++) {
          P[i][j] += A[i][k] * B[k][j];
        }
      }
    }
  
    return P;
  }
  

  let A = [
    [16, 17, 18],
    [21, 22, 23],
    [26, 27, 28],
    [31, 32, 33],
    [36, 37, 38],
  ];
  
  let B = [
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30],
  ]
  
  const P = multiplicarMatrizes(A, B);
  
  console.table(P);
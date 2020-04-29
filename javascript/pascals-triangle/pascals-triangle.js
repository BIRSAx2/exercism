//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (N) => {
  let rows=[];
  for(let L=0;L<N;L++){
    let row=[];
    for(let col=0;C<=L;C++){
      if(C==0 || L==C)
        row.push(1);
      else
        row.push(T[L-1][C]+T[L-1][C-1]);
    }
  }
  
 /* for (int L = 0;(L<N);L++)
    for (int C = 0;(C <= L);C++)
      {
      if ((C == 0) || (L == C))
        T[L][C] = 1;
      else 
        T[L][C] = T[L-1][C] + T[L-1][C-1];  
      }*/
};

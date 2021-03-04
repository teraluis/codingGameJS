 /*
Pi MonteCarlo Methode JS :
-----------------
*/

function getRandomInt(max:number) {
  return Math.round(Math.random() *500) /500;
}

function generatePoints(n:number) {
    let points = [];
    for(let i = 0; i < n; i++) {
        points.push([getRandomInt(1),getRandomInt(1)]);
    }
    return points;
}

/*
  Si Pi est à l'interieur du quart d'arc de cercle x^2 + y^1 <=1
  p = P1/P
  P1 = PI * R^2 
  P1/4 = (PI * R^2)/4
  SI R = 1
  P1 =  PI/4;
  pi = 4 * p1;
  p1 = Count / Total;
*/
function piMonteCarlo(points: number[][]) {
  let count = 0;
  for(const point of points) {
    if(pythagore(point[0], point[1]) <= 1) {
      count++;
    }
  }
  return (count/points.length)*4;
}

function pythagore(a: number,b: number) {
  return Math.sqrt( Math.pow(a, 2) + Math.pow(b, 2) );
}
let points = generatePoints(1000);

console.log(piMonteCarlo(points));
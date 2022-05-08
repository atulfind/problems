
// Number Line Jumps
// Can two kangaroo meet after making the same number of jumps?
// https://www.hackerrank.com/domains/algorithms?filters%5Bstatus%5D%5B%5D=unsolved&badge_type=problem-solving

const kangaroo = (x1, v1, x2, v2) => {

  if (v1 > v2) {
    const remainder = (x1 - x2) % (v2 - v1);
    if(remainder === 0){
      return "YES";
    }
  }

  return "NO";
}

const result = kangaroo(0, 3, 4, 2);

console.log(result);
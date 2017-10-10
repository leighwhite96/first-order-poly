var solve = function secDegSolver(a, b, c){
  if (a != 0) {
    if(b*b - 4*a*c > 0) {
      let x = parseFloat((((-1)*b + Math.sqrt(b*b - 4*a*c))/(2*a)).toFixed(10));
      let y = parseFloat((((-1)*b - Math.sqrt(b*b - 4*a*c))/(2*a)).toFixed(10));
      let sol = [x,y].sort();
        return "There are two solutions: x = " + sol[0] + ", x = " + sol[1];
    } else if (b*b - 4*a*c == 0){
      let x = Math.floor((((-1)*b)/(2*a)).toFixed(10));
        return "There is one repeated solution: x = " + x;
    } else if (b*b - 4*a*c < 0) {
        return "There are no real solutions"
    }
  } else {
    if(b != 0) {
      var x = (-1*c)/b;
      return "This is a first degree equation. It has solution: x = " + x;
    } else {
      if(c == 0) {
        return "This is an indeterminate equation";
      }
      return "This is an impossible situation. Wrong entries."
    }
  }
}

module.exports = solve;

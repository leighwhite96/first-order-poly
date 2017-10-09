var solve = function secDegSolver(a, b, c){
  if (a != 0) {
    if(b*b - 4*a*c > 0) {
      let x = parseFloat((((-1)*b + Math.sqrt(b*b - 4*a*c))/(2*a)).toFixed(10));
      let y = parseFloat((((-1)*b - Math.sqrt(b*b - 4*a*c))/(2*a)).toFixed(10));
      let sol = [x,y].sort();
        return "two solutions: " + sol[0] + ", " + sol[1];
    } else if (b*b - 4*a*c == 0){
      let x = Math.floor((((-1)*b)/(2*a)).toFixed(10));
        return "one double solution: " + x;
    } else if (b*b - 4*a*c < 0) {
        return "no real solutions"
    }
  } else {
    if(b != 0) {
      var x = (-1*c)/b;
      return "a first degree equation. Solution: " + x;
    } else {
      if(c == 0) {
        return "an indeterminate equation";
      }
      return "an impossible situation. Wrong entries."
    }
  }
}

module.exports = solve;

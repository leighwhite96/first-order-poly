const express = require("express");
const formidable = require("express-formidable");
const path = require("path");
const handlebars = require("express-handlebars");

const solve = require("./index.js");

const app = express();
const PORT = 3000;

app.engine('handlebars',handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

app.use(formidable());

// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname,"index.html"));
// });
app.get('/',function(req,res){
  res.render("index.handlebars");
})

app.post('/',function(req,res){
  var input = req.fields;
  var{a,b,c} = input;
  var solution = solve(a,b,c);
  console.log(solution);
  if(solution.substr(0,solution.indexOf(":")) === "Two solutions" || solution.substr(0,solution.indexOf(":")) === "one double solution" || solution.substr(0,solution.indexOf(":")) === "a first degree equation. Solution") {
  res.render("index", {
    sol: solution
  }
  )
} else if (solution == "no real solutions" || solution === "an indeterminate equation" || solution === "an impossible situation. Wrong entries."){
  res.render("index", {
    sol: solution
  })
}

});

app.listen(PORT,function(){
  console.log("I am listening on " + PORT);
});

//DONE
//need to display the basic equation with the unknowns: ax^2 + bx + c = 0 w/ 10dp
//three form inputs a,b,c.
//need to take these inputs and run them through the function from codewars.
//The solution to your equation is: HANDLEBARS??


//need to change the display message so that the message reads nicer. Maybe an if sol = "" render this?
//might need multiple handlebars files for that?
//add in a what the thing we're actually solving is
//UI and UX stuff.

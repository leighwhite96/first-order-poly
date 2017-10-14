const express = require("express");
const formidable = require("express-formidable");
const path = require("path");
const handlebars = require("express-handlebars");

const solve = require("./index.js");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars',handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

app.use(formidable());

app.get('/',function(req,res){
  res.render("index.handlebars");
})

app.post('/',function(req,res){
  var input = req.fields;
  var{a,b,c} = input;
  var solution = solve(a,b,c);
  if(c < 0){
    var equation = `Your equation is $$${a}x^2 + ${b}x ${c} = 0$$`
  } else {
  var equation = `Your equation is $$${a}x^2 + ${b}x + ${c} = 0$$`
  }

  res.render("index", {
    sol: solution,
    eq: equation
  }
  )

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
//UI

//TO DO
//explanation for each outcome

//make the answers display nicely with mathmode
//if you put in 1x or 0x display x or nothing respectively
//maybe log all the equation you have solved in that session?
//more responsive
//title
//imaginary equation solver?
//click for more explanation?

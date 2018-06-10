var express = require("express"),
    app = express();
  
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));  
app.use(express.static(__dirname + '/views')); 

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

app.get("/", function(req,res){
    res.render("index");  
});  


app.listen(port, process.env.IP, function(){
    console.log("Server is listening: " + port);
})
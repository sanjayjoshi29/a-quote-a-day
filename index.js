var express =  require('express');
var app =  express();

app.get('/',function(req,res){
    res.sendFile(__dirname +'/index.html');    
});
var port =process.env.port || 8080;

var server = app.listen(port, function(req, res)
{
    console.log("server started");
})
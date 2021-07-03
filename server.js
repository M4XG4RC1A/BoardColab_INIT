var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server)

app.use(express.static('public'));

app.get('/',function(req,res,next){
    res.sendFile(__dirname+'/index.html')
})

console.log("Server Runing");

io.on('connection', newConnection);

function newConnection(socket){
    console.log("User: "+socket.id);

    socket.on('mouse',mouseMsg);

    function mouseMsg(data){
        console.log(data.x,data.y);
        socket.broadcast.emit('mouse',data);function newDrawing(data){
            noStroke();
            fill(255,0,100);
            ellipse(data.x,data.y,36,36);
        }
        
    }
}

server.listen(4200);
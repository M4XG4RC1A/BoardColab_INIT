var socket = io.connect('http://localhost:4200');

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background(0);

    socket.on('mouse', newDrawing);

    function newDrawing(data){
        noStroke();
        fill(255,0,0);
        ellipse(data.x,data.y,15,15);
        console.log('New');
    }
}


function mouseDragged() {

    noStroke();
    fill(0,255,0);
    ellipse(mouseX,mouseY,15,15);

    var data = {
        x: mouseX,
        y: mouseY
    }

    console.log(data.x+","+data.y);
    socket.emit('mouse',data);   
}

function draw() {
    
}
function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture();
    tintcolour="";
    video.hide();
}

function draw(){
    image(video,0,0,500,500);
    circle(10,10, 50);
    circle(290,10, 50);
    circle(290,290, 50);
    circle(10,290, 50);
    
    
}

function filter_tint(){
     tintcolour=document.getElementById("colour").value;
}

function  take_snapshot(){
    save('img.jpeg');
}

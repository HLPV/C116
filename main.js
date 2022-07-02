nosex=0;
nosey=0;

function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}

function modelLoaded() {
    console.log('PoseNet Is Initialized'); 
}

function draw() {
     image(video, 0, 0, 300, 300); 
     fill(0,255,0);
     stroke(0,255,0);
     circle(nosex,nosey,20);
} 
    
function snapshot(){
     save('myFilterImage.png'); 
}
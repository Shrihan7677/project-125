left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup(){
video = createCapture(VIDEO);
video.size(450,450);
video.position(10,50);

canvas = createCanvas(400,400);
canvas.position(600,130);

posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose', gotPoses);
}


function modelLoaded(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotPoses(results, error){
if(error){
console.error(error);
}
if(results.length > 0){
console.log(results);
left_wrist_x = results[0].pose.leftWrist.x;
right_wrist_x = results[0].pose.rightWrist.x;
difference = floor(left_wrist_x - right_wrist_x);
console.log(difference);

console.log("rightwrist_x = "+results[0].pose.rightWrist.x+"rightWrist_y = "+results[0].pose.rightWrist.y);
console.log("leftwrist_x = "+results[0].pose.leftWrist.x+"leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}

function draw(){
    background("#2596be");
    document.getElementById("font_size").innerHTML = "The Size Is " +difference+"px";
    textSize(difference);
    fill("pink");
    text("Shrihan", 50,400);
}
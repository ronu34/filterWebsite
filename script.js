function preload() {}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.center(); // Corrected this line
    video.hide();
    posenet = ml5.poseNet(video,ModelLoaded);
    posenet.on("pose",getPoses);
}
function ModelLoaded() {
    console.log("Model initialized");
}

function getPoses(poses) {
    if (poses.length > 0) {
        console.log(poses);
        let nose = poses[0].pose.nose;
        console.log("Nose X: " + nose.x + ", Nose Y: " + nose.y);
    }
}


function draw() {
    image(video, 0, 0, 300, 300);
}

function snap() {
    save("filtered_image.jpg");
}

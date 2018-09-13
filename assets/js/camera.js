// Set constraints for the video stream
var userConstraints = { video: { facingMode: "user" }, audio: false };
var rearConstraints = { video: { facingMode: "environment" }, audio: false };

var constraints;

var selfie = false;

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger");
// Access the device camera and stream to cameraView
function cameraStart() {
    if(selfie === true){
        cameraView.classList.replace("user", "environment");
        cameraOutput.classList.replace("user", "environment");
        cameraSensor.classList.replace("user", "environment");
        constraints = rearConstraints;
        selfie = false;
    }
    else{
        cameraView.classList.replace("environment", "user");
        cameraOutput.classList.replace("environment", "user");
        cameraSensor.classList.replace("environment", "user");
        constraints = userConstraints;
        selfie = true;
    }

    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
}
// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};
// Start the video stream when the window loads
window.addEventListener("load", init, false);

function init(){
    document.getElementById('toggle-camera').addEventListener("click", function(){cameraStart()});
    cameraStart();
}
const rokuIPAddress = "YOUR_LOCAL_ROKU_IP_ADDRESS";
const port = "8060";

var upArrow = document.getElementById("up-arrow");
var downArrow = document.getElementById("down-arrow");
var leftArrow = document.getElementById("left-arrow");
var rightArrow = document.getElementById("right-arrow");
var okButton = document.getElementById("select");
var homeButton = document.getElementById("home");

function sendPOSTRequestToRoku(buttonType) {
    fetch(`http://${rokuIPAddress}:${port}/keypress/${buttonType}`, {
        method: "POST",
    }).then(console.log("done"));
}

upArrow.addEventListener("click", function() {sendPOSTRequestToRoku("Up")});
downArrow.addEventListener("click", function() {sendPOSTRequestToRoku("Down")});
leftArrow.addEventListener("click", function() {sendPOSTRequestToRoku("Left")});
rightArrow.addEventListener("click", function() {sendPOSTRequestToRoku("Right")});
okButton.addEventListener("click", function() {sendPOSTRequestToRoku("Select")});
homeButton.addEventListener("click", function() {sendPOSTRequestToRoku("Home")});
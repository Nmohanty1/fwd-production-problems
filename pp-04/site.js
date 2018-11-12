
function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

/*needed to create a button along with adding listner to play doorbell*/
document.querySelector("#button").innerHTML= "<button id='play'>Play</button>"
document.querySelector("#play").addEventListener("click",ringDoorbell)

function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

document.querySelector("#button").innerHTML= "<button id='play'>Play</button>"
documennt.querySelector("#ring").addEventListener("click",ringDoorbell)

const msc1 = document.getElementById("msc1");
const msc2 = document.getElementById("msc2");
const msc3 = document.getElementById("msc3");
const msc4 = document.getElementById("msc4");
const msc5 = document.getElementById("msc5");
const msc6 = document.getElementById("msc6");
const msc7 = document.getElementById("msc7");
const msc8 = document.getElementById("msc8");

document.onkeydown = 
function playlist (evt) {
  console.log(evt.key);
  let x = evt.key;
  switch (x) {
    case "w":
      msc1.play();
      break;
    case "q":
      msc2.play();
      break;
    case "a":
      msc3.play();
      break;
    case "s":
      msc4.play();
      break;
    case "d":
      msc5.play();
      break;
    case "e":
      msc6.play();
      break;
    case "f":
      msc7.play();
      break;
    case " ":
      msc8.play();
      break;
    default:
      console.log("error voice");
  }
}

document.addEventListener('mousedown',function(){
  x = "w";
  y = "s"
});
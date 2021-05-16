// Get the root element
var r = document.querySelector(':root');

function changeBackgroundRed() {
  // Get the checkbox
  var checkBox = document.getElementById("ok");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
  	r.style.setProperty('--letras', 'black');
  	r.style.setProperty('--fondo', 'white');
  	r.style.setProperty('--selection', '#BCBCBC');
    document.body.style.background = 'white';
  } else {
    document.body.style.background = "#1d2029";
    r.style.setProperty('--letras', 'white');
    r.style.setProperty('--fondo', '#1E347F');
    r.style.setProperty('--selection', '#36457B');
  }
}

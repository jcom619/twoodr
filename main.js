function newTwood() {
  var newText = document.getElementById("twood-input").value;
  document.getElementById("txtDisplay").innerText = newText;
}


function timeCutOff() {
  setTimeout(function () {
    const element = document.getElementById('done')
    element.classList.remove('hidden')
  }, 3000);
}

timeCutOff();
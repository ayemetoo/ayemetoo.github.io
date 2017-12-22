//Change title if page is not active
window.onblur = function() {
  document.title = ':( Come Back...';
}

window.onfocus = function() {
  document.title = 'Amy Tu';
}

//...Does something
var codePresses = ['ArrowUp','ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var codeIndex = 0;

window.onkeydown = function(evt) {
  var code = document.querySelector('#code-entered');
  if (evt.key === codePresses[codeIndex]) {
    codeIndex++;
  } else {
    codeIndex = 0;
  }
  console.log(codeIndex);

  if (codeIndex === 10) {
    alert("You are a nerd!");
    code.style.opacity = 1;
    code.style.width = 100 + "%";
  }
}

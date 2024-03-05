


document.getElementById("moveButton").addEventListener("click", function() {
  // Disable the button after it's clicked
  this.disabled = true;
  
  // Move the button randomly on the screen
  moveButtonRandomly(this);
});

function moveButtonRandomly(button) {
  var container = document.querySelector('.container');
  var containerRect = container.getBoundingClientRect();
  var buttonRect = button.getBoundingClientRect();
  
  var maxX = containerRect.width - buttonRect.width;
  var maxY = containerRect.height - buttonRect.height;
  
  // Generate random coordinates
  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);
  
  // Set new position
  button.style.position = 'absolute';
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
  
  // Repeat after a short delay
  setTimeout(function() {
    moveButtonRandomly(button);
  }, 1000); // Change the delay as needed
}
document.getElementById("button-1").addEventListener("click", function() {
  window.location.href = "yes.html";
});

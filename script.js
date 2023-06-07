// Get the button element
const button = document.getElementById("button");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Get all elements with the class "comment unread"
  const unreadComments = document.querySelectorAll(".comment.unread");

  // Loop through each unread comment and remove the "unread" class
  unreadComments.forEach(function(comment) {
    comment.classList.remove("unread");
  });

  // Update the innerHTML of the element with id "number" to 0
  const numberElement = document.getElementById("number");
  numberElement.innerHTML = "0";

  // Get all elements with the class "red-dot"
  const redDots = document.querySelectorAll(".red-dot");

  // Loop through each red dot and set the display property to "none"
  redDots.forEach(function(dot) {
    dot.style.display = "none";
  });
});

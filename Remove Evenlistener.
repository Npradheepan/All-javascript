<!DOCTYPE html>
<html>
<head>
<style>
#para {
  font-size: 3em;
  border: 2px solid black;
  margin: 20px 0;
  padding: 40px 20px;
  border-radius: 5px;
}
</style>
</head>
<body>

<p>Click the button to remove the event handler:</p>

<button onclick="removeHandler()">Remove Event</button>

<p id="para">Move your mouse here...</p>

<script>
// Attach an event handler to a P element with id="para"
var box = document.getElementById("para");
box.addEventListener("mousemove", myFunc);

function myFunc() {
   box.innerHTML = Math.random();
}

function removeHandler() {
   // Remove the event handler from a P element with id="para"
   box.removeEventListener("mousemove", myFunc);
}
</script>

</body>
</html>

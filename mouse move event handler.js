<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>mouse move</title>
</head>
<style>
#para {
  font-size: 3em;
  border: 2px solid black;
  margin: 20px 0;
  padding: 40px 20px;
  border-radius: 5px;
}
</style>
<body>
    <button onclick="removeHandler()">Remove Event</button>
    <p id="para">Move your mouse here</p>
</body>
<script>
    var box = document.getElementById("para");
    box.addEventListener("mousemove", myFunc);

    function myFunc(){
        box.innerHTML = Math.random();
    }
    function removeHandler(){
        box.removeEventListener("mousemove",myFunc)
    }
    
</script>
</html>

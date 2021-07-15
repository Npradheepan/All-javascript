<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>MouseEvenfunction</title>
</head>
<body>
    <p>This example uses the addEventListener() method to add many events on a button:</p>

    <button>Click me</button>
    
    <p id="para"></p> 
</body>
<script>
document.querySelector("button").addEventListener("mouseenter" ,clickme);
function clickme(){
    document.getElementById("para").innerHTML +="mouse enter! <br> "
}
document.querySelector("button").addEventListener("click", myfunc);
function myfunc(){
    document.getElementById("para").innerHTML+= "clicked! <br> "
}
document.querySelector("button").addEventListener("mouseout", otherfunc);
function otherfunc(){
    document.getElementById("para").innerHTML+= "moused oud! <br> "
}
</script>
</html>

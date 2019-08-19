<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Arrayobject.js</title>
</head>
<script>
function clickme(){
    var fruits=["Apple","Mango","Banana"];
    document.getElementById("result").innerHTML=fruits[0];
}
</script>
<body>
    <button onclick="clickme()">click</button>
    <p id="result"></p>
</body>
</html>

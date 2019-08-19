<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Creator</title>
</head>
<script>
Array.prototype.creator ="sweet"

function clickme(){
    var fruits=["Banana","Mango","Apple"];
    document.getElementById("result").innerHTML=fruits.creator;
}
</script>
<body>
    <button onclick="clickme()">click</button>
        <p id="result"> </p>    
</body>
</html>

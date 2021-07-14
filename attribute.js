<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>attribute concept</title>
</head>

<script>
    function clickme(){
        var attributeList = document.querySelector("img").attributes;
        var text="";
        for(let x= 0; x<attributeList.length; x++){
            text+=attributeList[x].name+"<br>";
        }
        document.getElementById("para").innerHTML = text;
    }
</script>
<style>

</style>
<body>
    <img src="images/index.jpg" alt="" style=" height=50px;width=50px;">
    <p id="para"></p>
    <button onclick="clickme()"> click</button>
</body>
</html>

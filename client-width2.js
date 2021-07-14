<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>clien-element</title>
</head>
<style>
    div {
   height: 200px;
   width: 350px;
   padding: 10px;
   margin: 15px;
   border-top: 15px solid rgb(60, 13, 233);
   border-left: 10px solid red;
   border-bottom: 20px solid rgb(225, 228, 36);
   border-right: 30px solid rgb(5, 105, 38);
   background-color: lightgreen;
}
</style>
<body>
        <p>Click the button to get the width of the DIV's top and left border, in pixels:</p>
        <button onclick="myFunc()">Click</button>
        <div>
          <p id="para"></p>
        </div>       
</body>
<script>
    function myFunc(){
        var elem = document.querySelector("div");
        var text = "Border top width:"+elem.clientTop +"px<br>";
        text += "Border left width: " + elem.clientLeft + "px<br>";
        text += "Border bottom width: " + elem.clientBottom + "px<br>";
        text += "Border right width: " + elem.clientRight + "px";
        document.getElementById("para").innerHTML=text;
    }
</script>
</html>

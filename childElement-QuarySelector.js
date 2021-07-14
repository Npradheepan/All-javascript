<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>childElement-QuarySelector</title>
</head>
<body>
    <p>Click the button to see how many child elements the DIV element has:</p>
    <div style="background: rgb(155, 226, 234);">
    <p>This is first P inside DIV</p>
    <p>This is second P inside DIV</p>
    <p>This is third P inside DIV</p>
    </div>
    <button onclick="myFunc()">Click</button>

    <p id="para"></p>
</body>
<script>
    function myFunc(){
        var len = document.querySelector("div").childElementCount;
        document.getElementById("para").innerHTML = len;
        
    }
</script>
</html>

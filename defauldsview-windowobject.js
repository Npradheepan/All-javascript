<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Defaultwindelement</title>
</head>
<script>
    function clickme(){
        var winobj = document.defaultView;
        for(let x in winobj){
            document.getElementById("details").innerHTML+=x +"<br>"
        }
    }
</script>
<body>
    <button onclick="clickme()">Click</button>
    <p id="details"></p>
</body>
</html>

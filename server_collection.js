<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="x">

    </div>

    <script>
        var srv = new XMLHttpRequest();
        srv.onreadystatechange = function(){
            if(this.readyState == 4 && this.status ==200){
                var txt = srv.responseText;
                document.getElementById("x").innerHTML = txt;
            }
        };
        srv.open("GET","page1.html",true);
        srv.send();
    </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>for loop concept in js</title>
</head>
<body>      
    <p>Click the button to change the background color of  class element "demo":</p>
    <div class="demo">
        <p>Click the button to change the background color of  class element"demo":</p>
    </div>   
    <div class="demo">
        <p>Click the button to change the background color of  class element "demo":</p>
    </div>   
    <div class="demo">
        <p>Click the button to change the background color of class "demo":</p>
    </div>
            <button onclick="clickme()">Click</button>
              
</body>
<script>
    function clickme() {
    var x = document.getElementsByClassName("demo");
    for(let i = 0; i < x.length; i++) {
       x[i].style.backgroundColor = "coral";    
    }
}
</script>
</html>

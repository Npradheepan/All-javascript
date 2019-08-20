<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>addEventListener.js</title>
</head>
<script>
        let btn = document.querySelector("button");
        btn.addEventListener("click", bgChange);
        
        function bgChange() {
          let color = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
          document.body.style.backgroundColor = color;
        }
        
        function random(number) {
          return Math.floor(Math.random()*(number+1));
        }
        </script>
<body>
        <p>Click the button below to change the background color of the document:</p>
    <button>Click me</button>
</body>
</html>

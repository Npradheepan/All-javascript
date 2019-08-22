<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>the background color of the second child element (index 1)</title>
</head>
<body>
        <p>Click the button to change the background color of the second child element (index 1) of a DIV element:</p>

        <button onclick="myFunc()">Click</button>
        
        <div>
           <p>This is first P inside DIV</p>
           <p>This is second P inside DIV</p>
           <p>This is third P inside DIV</p>
        </div>
</body>
<script>
    function myFunc() {
   var parent = document.querySelector("div");
   var list = parent.children;
   list[1].style.backgroundColor = "green";
}

</script>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>open document.js</title>
</head>
<body>
    
<p>Click the button to open an output stream, add some text, then close the output stream:</p>

<button onclick="myFunc()">Click me</button>
</body>
<script>
    function myFunc() {
   document.open();
   document.write("<p>The one and only content.</p>");
   document.close();
}
</script>
</html>

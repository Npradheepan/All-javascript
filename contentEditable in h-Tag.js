<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>contentEditable in h-Tag</title>
</head>

<body>
    <button onclick="myFunc()">Click</button>
    <h3 contenteditable>This heading element is editable:</h3>
    <p id="para"></p>
</body>
<script>
    function myFunc() {
    var x = document.getElementsByTagName("h3")[0].contentEditable;
    document.getElementById("para").innerHTML = x;
}
</script>
</html>

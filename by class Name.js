<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Element by class Name.js</title>
</head>
<style>
.para{
    width: 50%;
    background-color: blanchedalmond;
    color: chartreuse;
    font-size: 24px;
    padding: 12px 10px;
    text-align: center;
    box-shadow: 12px 12px 12px rebeccapurple;
}
</style>
<body>
    <p>Click the button to add the "para" class to a P element:</p>
    <button onclick="myFunc()">Add class</button>
    <p id="x">This is a Paragraph</p>
</body>
<script>
    function myFunc(){
        document.getElementById("x").className="para";
    }
</script>
</html>

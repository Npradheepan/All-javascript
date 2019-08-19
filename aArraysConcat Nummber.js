<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>cs</title>
</head>
<script> 
function clickme(){
    var num1 = [1,2,3];
    var num2 = [4,5,6];
    var num3 = [7,8,9];
    var nums = num1.concat(num2,num3);
    document.getElementById("result").innerHTML=nums;
}
</script>
<body>
    <button onclick="clickme()"> clikce</button>
    <p id="result"></p>
</body>
</html>

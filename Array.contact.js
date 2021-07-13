<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Array.contact</title>
</head>
<script>
    function clickme(){
        var fruits =["apple","Mango", "Banana","jsckfruit","cockonet"];
        var number =[5,6,2,6,8,4];
        var arr = fruits.concat(number);
        document.getElementById("result").innerHTML=arr;
    }
</script>
<body>
    <button onclick="clickme()">click</button>
    <p id="result"></p>
</body>
</html>

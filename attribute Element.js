<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Attributes-List-Name</title>
</head>
<body>
    <img src="/images/avatar-female.jpg" width="240" height="240">

    <p>Click the button to Loop through all attributes of an IMG element and output each attribute's name and value:</p>
    <button onclick="myFunc()">Click</button>

    <p id="para"></p>
</body>
<script>
    function myFunc() {
   var attrList = document.querySelector("img").attributes;
   var txt = "";

   for (let i = 0; i < attrList.length; i++) {
       txt += attrList[i].name + " = " + attrList[i].value + "<br>";
   }
   
   document.getElementById("para").innerHTML = txt;
}

</script>
</html>        

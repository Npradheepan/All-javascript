<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Javascritpt</title>
</head>
<style>
      #wrapper p:first-child {
            background-color: red;

      }

      p {
            border: 1px solid black;
            padding: 14px 10px;
            margin: 10px;
      }
</style>

<body>
      <h2>Finding HTML Elements by Tag Name</h2>

      <p>This is first P element outside DIV</p>
      <p>This is second P element outside DIV</p>
      <br>
      <br>
      <br>
      <div id="wrapper">
            <p>This is first P element inside DIV</p>
            <p>This is second P element inside DIV</p>
            <p>This is third P element inside DIV</p>
      </div>
      <br>
      <br>
      <br>
      <div id="container">
            <p>This is first P element inside DIV</p>
            <p>This is second P element inside DIV</p>
            <p>This is third P element inside DIV</p>
            <p>This is third P element inside DIV</p>
            <p>This is third P element inside DIV</p>
            <button onclick="myFunc()">Click</button>
      </div>

      <p>This is third P element outside DIV</p>


</body>
<script>
      //  document.getElementById("wrapper").getElementsByTagName("p")[1].style.backgroundColor = "coral";
      var x = document.getElementById("wrapper");
      var y = x.getElementsByTagName("p");
      y[1].style.backgroundColor = "coral";


      function myFunc() {
            var x = document.getElementById("container");
            var y = x.getElementsByTagName("p");
            for (let i = 0; i < y.length; i++) {
                  y[i].style.backgroundColor = "green";
            }
      }
</script>





</html>

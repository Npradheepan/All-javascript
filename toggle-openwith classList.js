<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Togggle Menu</title>
</head>
<style>
    body{
        margin: 0;
        font-family: lato,sans-serif;
    }

    #sidenav{
        height: 100%;
        width: 200px;
        position:fixed;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        padding-top: 60px;
        z-index: 1;
        transition:  all 0.5s;
    }

    #sidenav a{
        padding: 8px 8px 8px 32px;
        text-decoration:none;
        font-size: 24px;
        color: darkgray;
        display: block;
        transition: all 0.3s; 
    }

    #sidenav a:hover{
        color: cyan;
    }

    #main{
        padding:20px;
        position: relative;
        height: 100vh;
        background: #ffffff;
        z-index: 5;
        transition: margin-left o.5s;
    }
    #main.open{
        margin-left: 200px;
    }
</style>
<body>  
    
<div id="sidenav">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      
      <div id="main">
            <span style="font-size:30px;cursor:pointer" onclick="toggleNav()">&#9776; Click</span>
            <h2>site toggle menu open by class classList</h2>
            <p>Click on the button below to toggle the side navigation menu, and push this content to the right.</p>
      </div>
      
</body>
<script>
    function toggleNav(){
        var x = document.getElementById("main");
        main.classList.toggle("open");
    }
</script>
</html>

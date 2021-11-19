<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
#value {
    font-size: 64px;
}
</style>
<body>
    <center>
        <div class="container">
            <h1>
                Counter
            </h1>
            <span id="value">0</span>
            <div class="button-container">
                <button class="btn decrease">Decrease</button>
                <button class="btn reset">Reset</button>
                <button class="btn increase">Increase</button>
            </div>
        </div>
    </center>
</body>
<script>
    //initial count
    let count = 0;
    //select value and buttons 
    const value = document.querySelector("#value")
    const btns =document.querySelectorAll(".btn")
    btns.forEach(function (btn ){
        btn.addEventListener('click', function(e) {// (e)Event Object
        //console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if (styles.contains ("decrease")) {
            count --;
        }else if (styles.contains ('increase')) {
            count ++;
        }else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = "green";
        }
        if(count < 0) {
            value.style.color = "red";
        }
        if(count === 0) {
            value.style.color = "#000";
        }
        value.textContent = count;
        });
    });
</script>
</html>

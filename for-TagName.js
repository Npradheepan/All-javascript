<!DOCTYPE html>
<html>
<body>
<h1>getElementsByTagName() Method</h1>

<div>Click the button to change the text of the first paragraph element (index 0).</div>

<button onclick="myFunc()">Click</button>

<p>This is first Paragraph</p>
<p>This is second Paragraph</p>
<p>This is third Paragraph</p>

<script>
function myFunc() {
    var x = document.getElementsByTagName("p");
    for(let i = 0; i < x.length; i++) {
       x[i].innerHTML = "Change the latter";    
    }
    }
</script>

</body>
</html>

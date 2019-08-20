<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=0, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Video fullscreen.js</title>
</head>
<script>
    function videofulls(){
        var video= document.quarySelector("video");
        if(document.fullscreenEnabled|| document.webkitFullScreeEnable || document.MozFullScreenEnable||document.msFullScreenEnabble)
        {
            if(video.requesrFullScreen){
                vidio.requestFullScreen();
            }
            else if(video.webkitRequesrFullScreen){ 
                    video.webkitRequesrFullScreen();
            }
            else if(video.MozRequesrFullScreen){
                video.MozRequesrFullScreen();
            }
            else if(video.msRequesrFullScreen){
                video.MozrequesrFullScreen();
            }
        }
    }
</script>
<style>
video{
    height: auto;;
    width: 100%;
}
</style>
<body>
<h1>video full screen function in java script script</h1>
<video src="dummy.mp4" type="video/mp4"></video>
<source src="dummy.mp4" type="video/mp4"> 
<button onclick="videofulls"></button>    
</body>
</html>

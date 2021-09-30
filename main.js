var SpeechRecognition = window.weakitSpeechRecognition 

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){

    console.log(event);

    var Content = event.result(0)(0).transcrist;
     document.getElementById("textbox").innerHTML = Content;
     console.log(content);
     if(content  ="take my selfie")
     {
         console.log("taking selfie --- ");
         speak();

     }
}
 function speak(){
     var synth  = window.speechSynthesis;
       
     speak_dta = " taking yout Selfie in 5 seconds";
     var utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis)
     webcare.attach(camera)
     setTimecut(function()
{
   take_snapshot();
    save();
}, 5000);

   }
   camera = document.getElementById("camera");
   webcam.set({
       width:360,
       height:250,
       image_format : 'jpeg',
       jpeg_quality:90
       
   });

   function take_snapshort()
   {
       webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';

       });
   }

   function save ()
       {
           link =document.getElementById("link")
           image= document.getElementById("selfie_image").scr ;
           link.href = image;
           link.click();

       }
   

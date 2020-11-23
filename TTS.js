var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();

  function start(){
   document.getElementById("voice_recieved").innerHTML = "";
   recognition.start();
 } 
 recognition.onresult = function(event) { console.log(event);
  var content=event.results[0][0].transcript;
  document.getElementById("voice_recieved").innerHTML=content;
  console.log(content);
  speak();
}
camera=document.getElementById("selfie_takendiv");
function speak(){
  var voice=window.speechSynthesis;
  speakthought=document.getElementById("voice_recieved").value;
  var say_this=new SpeechSynthesisUtterance(speakthought);
  speech.speak(say_this);
  Webcam.attach(camera);
}
Webcam.set({
  width: 320,
  height: 220,
  image_format: 'jpeg',
  jpeg_quality: 90
});
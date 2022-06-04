function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet",modalLoaded);
}
function modalLoaded(){
  console.log("modal is loaded");
}
function draw(){
  image(video ,0,0,400,400)
  classifier.classify(video,gotResults);
}
var previous="";
function gotResults(error,results){
  if (error){
    console.error(error);
  }
  else {
    if ((result[0].confidence>0.5)&&(previous!=results[0].label)){
    console.log(results);
    previous=results[0].label;
    var synth=window.speechSynthesis;
    speakData="object detected is- "+results[0].label;
     utterThis=new SpeechSynthesisUtterance(speakData);
     synth.speak(utterThis);
     document.getElementById("result_object_name").innerHTML=results[0].label;
     document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
  }
}
}




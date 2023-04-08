function Start() {

navigator.mediaDevices.getUserMedia({audio:true});

classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/GMU79NZnG/model.json',modelReady);

}

function modelReady() {

classifier.classify(gotResults);

}


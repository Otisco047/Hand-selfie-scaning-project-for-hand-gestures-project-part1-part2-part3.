Webcam.set({
    width: 350,
    heighta: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_pic() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    })
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ccKm9iuZ9/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded");
}

function speak() {
    synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction Is " + prediction_1;
    speak_data_2 = "And The Second Prediction Is " + prediction_2;
    utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, getResults);
}

function getResults(e, r) {
    if (e) {
        console.error(e);
    } else {
        console.log(r);
        p1 = r[0].label;
        p2 = r[1].label;
        document.getElementById("emotion1").innerHTML = p1;
        document.getElementById("emotion2").innerHTML = p2;
        if (p1 == "Ok Sign") {
            document.getElementById("emoji_1").innerHTML = "&#128076;";
        } else if (p1 == "Good Sign") {
            document.getElementById("emoji_1").innerHTML = "&#128077;";
        } else if (p1 == "Peace Sign") {
            document.getElementById("emoji_1").innerHTML = "&#9996;";
        } else if (p1 == "Fist Sign") {
            document.getElementById("emoji_1").innerHTML = "&#9994;";
        } else if (p1 == "Clap Sign") {
            document.getElementById("emoji_1").innerHTML = "&#128079;";
        } else if (p1 == "Rock Sign") {
            document.getElementById("emoji_1").innerHTML = "&#129304;";
        }

        if (p2 == "Ok Sign") {
            document.getElementById("emoji_2").innerHTML = "&#128076;";
        } else if (p2 == "Good Sign") {
            document.getElementById("emoji_2").innerHTML = "&#128077;";
        } else if (p2 == "Peace Sign") {
            document.getElementById("emoji_2").innerHTML = "&#9996;";
        } else if (p2 == "Fist Sign") {
            document.getElementById("emoji_2").innerHTML = "&#9994;";
        } else if (p2 == "Clap Sign") {
            document.getElementById("emoji_2").innerHTML = "&#128079;";
        } else if (p2 == "Rock Sign") {
            document.getElementById("emoji_2").innerHTML = "&#129304;";
        }
    }

}
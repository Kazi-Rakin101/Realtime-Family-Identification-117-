function setup()
{
    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-rbxbsTUh/model.json');
}

function modelLoaded()
{
    console.log('Model Loaded!');
}

function draw()
{
    image(video, 0, 0, 350, 350);
    classifier.classify(video, gotResult);
}

function gotResult(error, result)
{
    if (error)
    {
        console.error(error);
    }else
    {
        console.log(result);
        document.getElementById("result_object_name").innerHTML = result [ 0 ].label;
        document.getElementById("result_accuracy_name").innerHTML = result [ 0 ].confidence.toFixed(3);
    }
}
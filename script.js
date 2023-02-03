// const { text } = require("express");

// var speechRecognition=Window.webkitSpeechRecognition
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

var textbox=$("#textbox")

var instructions=$("#instructions")

var content = ''

recognition.continous=true

recognition.onstart=function()
{
    instructions.text("Recording your voice.....")
}

recognition.onspeechend = () => {
  instructions.text("No activity....Start again");
};

recognition.onerror = () => {
  instructions.text("Try again");
};

recognition.onresult=function (event)
{
    var current=event.resultIndex;

    var transcript=event.results[current][0].transcript;
    content+=transcript;

    textbox.val(content);
}


$('#starttt').click(function(event)
{
    if(content.length)
    {
        content+=''
    }

    recognition.start()

})

textbox.on('input',function(){
    content=$(this).val();
})

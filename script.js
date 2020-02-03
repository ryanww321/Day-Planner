var $9AM = $("#9AM");
var $10AM = $("#10AM");
var $11AM = $("#11AM");
var $12PM = $("#12PM");
var $1PM = $("#1PM");
var $2PM = $("#2PM");
var $3PM = $("#3PM");
var $4PM = $("#4PM");
var $5PM = $("#5PM");

// array for the current state function to change the background colors
var timeBlocksArray = [
    $9AM, $10AM, $11AM, $12PM, $1PM,
    $2PM, $3PM, $4PM, $5PM
]

var todoList = [
    "", "", "", "", "",
    "", "", "", "",
];


// sets current time in the header and changes background colors of text areas
$(document).ready(function () {

    setInterval(function () {

        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);

    function setCurrentState() {
        var currentTime = moment().format('HH');
        var count = parseInt(currentTime);

        for (var i = 0; i < timeBlocksArray.length; i++) {
            if ((count - 9) > i)
                timeBlocksArray[i].addClass("past");
            else if ((count - 9) === i)
                timeBlocksArray[i].addClass("present");
            else if ((count - 9) < i)
                timeBlocksArray[i].addClass("future");
        }

    }

    function storingTodos() {

        for (var i = 0; i < timeBlocksArray.length; i++) {
            todoList[i] = timeBlocksArray[i].text();

        }

    }

    storingTodos();

    setCurrentState();


    // still having an issue figuring out local storage
    $(".saveBtn").click(function(){
            console.log("this was cicked");
        localStorage.getItem ("textinput", "");
        document.getElementsByTagName("").innerHTML = localStorage.getItem("");

    })




});




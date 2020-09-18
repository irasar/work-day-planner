var timeDisplay = $("#currentDay");

var currentTime = moment().format("dddd, MMMM Do");

var nine = $("#9am");

$('#9amtext').val(localStorage.nine);


timeDisplay.append(currentTime);

nine.click(function() {
   var text = $('textarea').val();
   localStorage.nine = text;
 });


console.log(moment().hour())
console.log();
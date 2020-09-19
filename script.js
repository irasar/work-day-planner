var timeDisplay = $("#currentDay");

var currentTime = moment().format("dddd, MMMM Do");

var nine = $("#9am");
var ten = $("#10am");
var eleven = $("#11am");
var twelve = $("#12pm");
var one = $("#1pm");
var two = $("#2pm");
var three = $("#3pm");
var four = $("#4pm");
var five = $("#5pm");


$("#9amtext").val(localStorage.nine);



nine.click(function() {
   var text = $("#9amtext").val();
   localStorage.nine = text;
});


$("#10amtext").val(localStorage.ten);

ten.click(function() {
   var text = $("#10amtext").val();
   localStorage.ten = text;
 });

 $("#11amtext").val(localStorage.eleven);

 eleven.click(function() {
   var text = $("#9amtext").val();
   localStorage.eleven = text;
});

$("#12pmtext").val(localStorage.nine);

nine.click(function() {
   var text = $("#12pmtext").val();
   localStorage.twelve = text;
});

$("#9amtext").val(localStorage.nine);


nine.click(function() {
   var text = $("#9amtext").val();
   localStorage.nine = text;
});

$("#9amtext").val(localStorage.nine);

nine.click(function() {
   var text = $("#9amtext").val();
   localStorage.nine = text;
});

$("#9amtext").val(localStorage.nine);

nine.click(function() {
   var text = $("#9amtext").val();
   localStorage.nine = text;
});

$("#9amtext").val(localStorage.nine);

nine.click(function() {
   var text = $("#9amtext").val();
   localStorage.nine = text;
});



console.log(moment().hour())



timeDisplay.append(currentTime);
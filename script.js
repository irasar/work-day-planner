var timeDisplay = $("#currentDay");

var currentTime = moment().format("dddd, MMMM Do");


timeDisplay.append(currentTime);

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
   var text = $("#11amtext").val();
   localStorage.eleven = text;
});

$("#12pmtext").val(localStorage.twelve);

twelve.click(function() {
   var text = $("#12pmtext").val();
   localStorage.twelve = text;
});

$("#1pmtext").val(localStorage.one);


one.click(function() {
   var text = $("#1pmtext").val();
   localStorage.one = text;
});

$("#2pmtext").val(localStorage.two);

two.click(function() {
   var text = $("#2pmtext").val();
   localStorage.two = text;
});

$("#3pmtext").val(localStorage.three);

three.click(function() {
   var text = $("#3pmtext").val();
   localStorage.three = text;
});

$("#4pmtext").val(localStorage.four);

four.click(function() {
   var text = $("#4pmtext").val();
   localStorage.four = text;
});



$("#5pmtext").val(localStorage.five);

five.click(function() {
   var text = $("#5pmtext").val();
   localStorage.five = text;
});





console.log(moment().hour())




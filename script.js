//displaying current time
var timeDisplay = $("#currentDay");

var currentTime = moment().format("dddd, MMMM Do");


timeDisplay.append(currentTime);
//global variables
var nine = $("#9am");
var ten = $("#10am");
var eleven = $("#11am");
var twelve = $("#12pm");
var one = $("#1pm");
var two = $("#2pm");
var three = $("#3pm");
var four = $("#4pm");
var five = $("#5pm");


//9am value into local storage
$("#9amtext").val(localStorage.nine);


//9am on click save textbox into local storage
nine.click(function() {
   var text = $("#9amtext").val();
   localStorage.nine = text;
});


//10am value into local storage
$("#10amtext").val(localStorage.ten);



//10am on click save textbox into local storage

ten.click(function() {
   var text = $("#10amtext").val();
   localStorage.ten = text;
 });




//11am value into local storage

 $("#11amtext").val(localStorage.eleven);

//11am on click save textbox into local storage
 eleven.click(function() {
   var text = $("#11amtext").val();
   localStorage.eleven = text;
});



//12pm value into local storage
$("#12pmtext").val(localStorage.twelve);

//12pm on click save textbox into local storage
twelve.click(function() {
   var text = $("#12pmtext").val();
   localStorage.twelve = text;
});

//1pm value into local storage
$("#1pmtext").val(localStorage.one);


//1pm on click save textbox into local storage
one.click(function() {
   var text = $("#1pmtext").val();
   localStorage.one = text;
});

//2pm value into local storage
$("#2pmtext").val(localStorage.two);

//2pm on click save textbox into local storage
two.click(function() {
   var text = $("#2pmtext").val();
   localStorage.two = text;
});

//3pm value into local storage
$("#3pmtext").val(localStorage.three);

//3pm on click save textbox into local storage
three.click(function() {
   var text = $("#3pmtext").val();
   localStorage.three = text;
});

//4pm value into local storage
$("#4pmtext").val(localStorage.four);

//4pm on click save textbox into local storage
four.click(function() {
   var text = $("#4pmtext").val();
   localStorage.four = text;
});



//5pm value into local storage
$("#5pmtext").val(localStorage.five);

//5pm on click save textbox into local storage
five.click(function() {
   var text = $("#5pmtext").val();
   localStorage.five = text;
});


//adding moment.js to get current hour
var curentHour = parseInt(moment().format("H"));
//
$(".textBox").each(function() {
   var timeBlock = parseInt($(this).attr("data-time"));
   //if time is less than current hour
   if(timeBlock < curentHour) {
      //make grey
      $(this).addClass("past");
   }
   //if time is equal to current hour
   else if(timeBlock == curentHour){
      //make orange
      $(this).addClass("present");
   }
   else {
      //make green
      //if time is more than current hour
      $(this).addClass("future");
   }
});







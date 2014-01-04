$(document).ready(function(){

// Scrolling

  $('.arrow').click( function() {
    var target = '#container';
    scrollToElement(target)
    $('.arrow a i').css("-webkit-text-fill-color", "#1E2F3F")
  });

function scrollToElement(target) {
  var topoffset = -50;
  var speed = 800;
  var destination = $('.arrow').offset().top - topoffset;
  $( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: destination}, speed, function() {
  });
  return false;
};

// Charts

var doughnutData = [
  {
    value: 70,
    color:"#1abc9c"
  },
  {
    value : 30,
    color : "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 90,
    color:"#1abc9c"
  },
  {
    value : 10,
    color : "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 65,
    color:"#1abc9c"
  },
  {
    value : 35,
    color : "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 80,
    color:"#1abc9c"
  },
  {
    value : 20,
    color : "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 70,
    color:"#1abc9c"
  },
  {
    value : 30,
    color : "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 50,
    color:"#1abc9c"
  },
  {
    value : 50,
    color : "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("illustrator").getContext("2d")).Doughnut(doughnutData);


});
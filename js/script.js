$(document).ready(function(){

// Scrolling

  $('.arrow').click( function() {
    var target = ".container";
    scrollToElement(target)
  });

  $('.arrow1').click( function() {
    var target = ".split";
    scrollToElement(target)
  });

function scrollToElement(target) {
  var topoffset = -50;
  var speed = 800;
  var destination = $(target).offset().top;
  $( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: destination}, speed, function() {
  });
  return false;
};

});

$(window).ready(function(){

// Charts

var doughnutData = [
  {
    value: 70,
    color:"#4B91CD"
  },
  {
    value : 30,
    color : "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("ruby").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 85,
    color:"#4B91CD"
  },
  {
    value : 15,
    color : "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("rails").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 60,
    color:"#4B91CD"
  },
  {
    value : 40,
    color : "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("js").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 95,
    color:"#4B91CD"
  },
  {
    value : 5,
    color : "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 70,
    color:"#4B91CD"
  },
  {
    value : 30,
    color : "#ecf0f1"
  }
];
var myDoughnut = new Chart(document.getElementById("git").getContext("2d")).Doughnut(doughnutData);

var doughnutData = [
  {
    value: 90,
    color:"#4B91CD"
  },
  {
    value : 10,
    color : "#ecf0f1"
  } 
];
var myDoughnut = new Chart(document.getElementById("adobe").getContext("2d")).Doughnut(doughnutData);

});
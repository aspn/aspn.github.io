var portfolio = (function(){
  return {
    menu: function(){
      $('.menu-item').click(function(){
        var clicked = this;
        if ($(this).hasClass("menu-anson")){
          portfolio.scrollToElement(true, '.hero');
        } else if ($(this).hasClass("menu-contact")){
          portfolio.scrollToElement(true, '.container');
        } else if ($(this).hasClass("menu-edu")){
          portfolio.scrollToElement(true, '.split');
        } else if ($(this).hasClass("menu-exp")){
          portfolio.scrollToElement(true, '.split');
        } else if ($(this).hasClass("menu-skill")){
          portfolio.scrollToElement(true, '.split');
        } else if ($(this).hasClass("menu-port")){
          portfolio.scrollToElement(true, '.split');
        }
      });
    },
    arrow: function(){
      $('.arrow').click(function(){
        $(this).hasClass('arrow1') ? portfolio.scrollToElement(false, '.container') : portfolio.scrollToElement(false, '.split');
      });
    },
    scrollToElement: function(menu, target) {
      if (menu) {
        $('.menu-trigger span').click();
      }
      var topoffset = -50;
      var speed = 800;
      var destination = $(target).offset().top;
      $( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: destination}, speed, function() {
      });
      return false;
    }
  };
}());

$(document).ready(function(){

  portfolio.menu();
  portfolio.arrow();

  // Charts

  function charts(e){

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
  }

  charts();


});

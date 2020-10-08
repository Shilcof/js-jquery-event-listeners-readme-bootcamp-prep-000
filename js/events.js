//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
    $('img').css( "border", "red" );
  });
}

function pressIt() {
  
}

function submitIt() {
  
}

$(document).ready(function(){

// call functions here

});

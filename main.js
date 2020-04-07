$(document).ready(function(){

    var contenitore = $("#centrale");
    var bottone= $("#freccia");


    bottone.click(

      function(){
        var input= $("#scrivi").val();
        contenitore.append("<li class=dentro>" + input + "</li>");
         
      }

    )




    $(".msg1").mouseenter( function(){
      $(this).css("background-color","yellow");
    }
  );

  $(".msg1").mouseleave( function(){
    $(this).css("background-color","white");
  }
);


});

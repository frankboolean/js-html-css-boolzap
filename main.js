$(document).ready(function(){

    var contenitore = $(".central");
    var bottone= $("#freccia");
    var risposta= "ok";


    bottone.click(

      function(){
        var input= $("#scrivi").val();
        contenitore.append("<span class=\"testodom\">" + input + "</span>");
        $("#scrivi").val("");

        function inviaMessaggioRisposta() {
          // farà qualcosa
          console.log("messaggio inviato");
          contenitore.append("<span class= \"testorisp\">" + risposta + "</span>");
        }

        setTimeout(inviaMessaggioRisposta, 1000);
      }

    )


    // regisro un evento che gestisce la pressione dei tasti sul campo di ricerca
      // dentro la gestione dell'evento faccio la mia ricerca
    $("#cercami").keyup(function() {

      console.log("1");

// otteniamo il valore da filratre
      var aggiungi= $("#cercami").val().toLowerCase();

      $(".msg1").each(function(){



        // verificahiamo se il valore da filtrare è contenuto nel nome della persona

        var nomeDellElemento = $(this).find(".contact").text().toLowerCase();
        // aggiungi potrebbe valere da esempio mar


        if (nomeDellElemento.includes(aggiungi)) {

          $(this).show();
          // l'elemento è da mostrare
        } else {

          $(this).hide();
          // l'eleemnto è da nasconere
        }
        // se è così lo mostriamo, altrimenti lo nascondiamo
      });

    });



  $(".msg1").mouseenter( function(){
      $(this).css("background-color","yellow");
    }
  );

  $(".msg1").mouseleave( function(){
      $(this).css("background-color","white");
    }
  );


});

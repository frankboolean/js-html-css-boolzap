$(document).ready(function(){


    var bottone= $("#freccia");
    var risposta= "ok";
    var contenitore = $(".central");


    bottone.click(

      function(){
        var chatActive = $(".central.active");
        var input= $("#scrivi").val();
        // handlebars
        var source = $("#msgInviati-template").html();
        var template = Handlebars.compile(source);
        // ....

        var context = { "inputPh": input };
        var html = template(context);
        chatActive.append(html)

        // append
        // chatActive.append("<div class=\"domanda\"><span class=\"testodom\">" + input + "</span></div>");
        // $("#scrivi").val("");



        function inviaMessaggioRisposta() {

          // handlebars inviaMessaggioRisposta

          var source = $("#msgRicevuti-template").html();
          var template = Handlebars.compile(source);
          // ....
          var contexRisp = { "rispPh": risposta };
          var html = template(contexRisp);
          chatActive.append(html)

          // farà qualcosa
          // console.log("messaggio inviato");
          // chatActive.append("<div class=\"domanda\"><span class= \"testorisp\">" + risposta + "</span></div>");
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

  // milestone 3

  $(".msg1").click(
    function(){

      $(".msg1").removeClass("active");
      $(this).addClass("active");
      var data= $(this).data("conversazione");
      $(".central").removeClass("active");
      $(".central").eq(data).addClass("active");

    }
  )

  // freccina cancella

  function showMessage () {
    var inst= $(this).closest(".domanda");
    inst.siblings(".domanda").find(".cancellamsg").removeClass("active");
    inst.find(".cancellamsg").toggleClass("active")
  }

  function distruggi(){
    var inst= $(this).closest(".domanda");
    inst.remove()
  }

  // handlebars....




});

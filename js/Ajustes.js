$( document ).ready(function() {

   var content=0;
   $("#contenido").hide();

  $("#esconder").on("click", function (){
    switch (content){
      case 1:
      $("#contenido").hide();
      content--;
      break;
      case 0:
      $("#contenido").show();
      content++;
      break;
    }
  });
});
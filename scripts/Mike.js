$(function(){
    
    let index =0; // permettra de parcourire le tableau d'image
    
    setInterval(function(){ // permet d'effectuer une fonction toute les x seconde
        
      let Image = ["http://www.vin-gastronomie-drome.com/wp-content/uploads/2016/11/photo-1.jpg","http://www.maisondelanature.eu/wp-content/themes/lacabane/functions/timthumb.php?src=http://www.maisondelanature.eu/wp-content/uploads/2016/06/JJW_Renard-roux-48.jpg&w=960&h=360&zc=1","http://www.vibrenergil.com/nature_960x360.jpg"];  // variable qui stock nos images
        
        if(index==Image.length) // condition pour revenir à la première image
            index = 0;
        $("#slider-Mike").attr("src",Image[index]); // Modifier la source de l'image
        
        index++;
    }, 3000);
    
    /* ------------------Exercice1*/

    $("#imagesMike1").one("click",function(){
       $("#imagesMike1").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bere%C5%9Fe.jpg/290px-Bere%C5%9Fe.jpg") 
    });
    
    /*------------------------Exercice2*/
    $(".one_third").one("click",function(){
      $("#imagesMike1").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bere%C5%9Fe.jpg/290px-Bere%C5%9Fe.jpg");
        
        $("#imagesMike2").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Netta_erythrophthalma_Germany01.jpg/290px-Netta_erythrophthalma_Germany01.jpg")
        
        $("#imagesMike3").attr("src","https://s-media-cache-ak0.pinimg.com/736x/da/0d/fe/da0dfe1ff8802fa57d05853a2a701adc.jpg") 
    })
    /*----------------Exercice 3--------------*/

    $(".one_third").click(function(){// fonction se déclenche au click sur la class one third

      let image = $("#imagesMike1").attr("src"); // je stock la valeur src de la première image 

      $("#imagesMike1").attr("src",$("#imagesMike3").attr("src"));

      $("#imagesMike3").attr("src",$("#imagesMike2").attr("src"));

      $("#imagesMike2").attr("src",image);
     });    

        /*------------Exercice4------------------*/

    $(".one_quarter .more > a").click(function(){ // l'evenement se déclenche sur la balise a qui se trouve dans calss more

        event.preventDefault(); // Annuler l'evenement par défault

        console.log($(this)) // balise a selectionner 

        console.log($(this).parent()) // balise p classe more

        console.log($(this).parent().parent()); // balise article classe one_carter

        console.log($(this).parent().parent().children("p")); // balise p

        $(this).parent().parent().children("p").eq(0).append("hello how are you") });  // la fonction eq() permet de parcourire un tableau  jquery
    
    

   
    /*------------------------------Exercice5--------------------------*/
    
  var request = $.ajax({ // envoi d'un request sur une url avec methode
      
  url: "https://jsonplaceholder.typicode.com/users",
  method: "GET",
  dataType: "json" // optionel _ definie le type de donnée recu par le serveur
 
});
 
request.done(function(users){ //  done = success - code à effectuer en cas de réussite - REPONSE EN CAS DE REUSSITE(usere = reponse de serveur)
    let content ="";
  console.log(users);
    for(var i= 0; i< users.length; i++){
        content +='<li><a href="#">'+users[i].name+'</a></li>'
    }
    $("#right_column ul").html(content)// evenement du DOM - modification de HTML dans la balise  ul se trouve dans la balise qui a l'id right column -content contient le code html
});
 
request.fail(function( jqXHR, textStatus ) { // fail = echec -code à effectuer en cas d'echec - REPONSE  EN CAS D'ECHEC
  alert( "Request failed: " + textStatus );
});  
    
 /*-----------------------Exercice 6---------------------------*/ 
    
/*
Afficher les 2 prmiere images recupere via l'ajax surl'url (https://jsonplaceholder.typicode.com/photos) sue les deux articles dans la section posts
*/
    
      
$.ajax({ // envoi d'un request sur une url avec methode
      
  url: "https://jsonplaceholder.typicode.com/photos",
  method: "GET",
  dataType: "json" // optionel _ definie le type de donnée recu par le serveur
 
})
 
.done(function(photos){ //  done = success - code à effectuer en cas de réussite - REPONSE EN CAS DE REUSSITE(usere = reponse de serveur)
    console.log($("#posts img"))
    for(var i = 0; i< 2 ; i++)
        $("#posts img").eq(i).attr("src", photos[i].url)
    
      $("#posts .more > a").click(function(){ // l'evenement se déclenche sur la balise a qui se trouve dans calss more

        event.preventDefault(); // Annuler l'evenement par défault

        console.log($(this)) // balise a selectionner eq

        console.log($(this).parent()) // balise p classe more

        console.log($(this).parent().parent()); // balise article classe one_carter

        console.log($(this).parent().parent().parent().children("img")); // balise p
      for(var i= 0;i<2; i++){
          if(photos[i].url ==
             $(this).parent().parent().parent().children("img").attr("src")) 
             $(this).parent().parent().children("p").append(photos[i].title);
      }

       /* $(this).parent().parent().children("p").eq(i).append("hello how are you") });*/  // la fonction eq() permet de parcourire un tableau  jquery
  });
})
 
request.fail(function( jqXHR, textStatus ) { // fail = echec -code à effectuer en cas d'echec - REPONSE  EN CAS D'ECHEC
  alert( "Request failed: " + textStatus );
});  
    /*--------------Exercice7-----------------*/
    
});

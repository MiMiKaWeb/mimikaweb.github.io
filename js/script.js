$(document).ready( function () {
    
    //ici c'est poiur le defilement au rallenti
   $('#nav_home').click(function() {
     $('body').animate({scrollTop: $("#contenue").offset().top}, 'slow'      );
   });
    
    $('#nav_about').click(function() {
     $('body').animate({scrollTop: $("#about").offset().top}, 'slow'      );
   });
    
       $('#nav_creation').click(function() {
     $('body').animate({scrollTop: $("#creation").offset().top}, 'slow'      );
   });
    
    $('#nav_contact').click(function() {
     $('body').animate({scrollTop: $("#contact").offset().top}, 'slow'      );
   });
    //ici c'est pour le scrool
   // Pour tous les liens commençant par #.
	$("a[href^='#']").click(function (e) {
		// On annule le comportement initial au cas ou la base soit différente de la page courante.
		e.preventDefault(); 
				
		// On ajoute le hash dans l'url.
		window.location.hash = $(this).attr("href");
		
		// Une fois en place on va forcer l'affichage 40 pixels plus haut.
		$(window).scrollTop( $(window).scrollTop() - 40 );
	});
    
    //ici c'est pour le slide 
        $(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 528,
        play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true
        }
      });
    });
    //lightbox
    
     $(".big").fancybox({
        'width'             : '1000px',
        
        'autoScale'         : false,
        'transitionIn'      : 'elastic',
        'transitionOut'     : 'elastic',
        
    });
    
})







/*/ $(document).ready( function() {
   alert('I m ok !');
}); */

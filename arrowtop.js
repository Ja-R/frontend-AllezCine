$(document).ready(function(){

  // fleche vers le haut
  // var banniere = document.getElementById('banniere');
  // var arrow = document.getElementById('arrow');
  // $(window).scroll(function(){
  //   // console.log('page', window.pageYOffset);
  //   // console.log('banniere', banniere.offsetHeight);
  //   if(window.pageYOffset > (banniere.offsetHeight / 2 )){
  //     $(arrow).show();
  //     // console.log('visible');
  //   }
  //   else{
  //     $(arrow).hide();
  //     // console.log('cache');
  //   }
  // })

  // carousel et modal !

  // stop
  function pauseCarousel(){
    $(".modalFilms").click(function(){
      $("#carouselFilms").carousel("pause");
    });
    // restart
    $(".modal .btn").click(function(){
      $("#carouselFilms").carousel("cycle");
    });
  }
  pauseCarousel()


  // shadow
  function luminosite(){
    $(".btn-trailer").mouseenter(function(){
      $(".carousel-item img").removeClass("shadow").addClass("lightness");
    });

    $(".btn-trailer").mouseleave(function(){
      $("#carouselHeader img").removeClass("lightness").addClass("shadow");
    });
  }
  luminosite();


});

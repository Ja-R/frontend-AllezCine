$(document).ready(function(){

  // fleche vers le haut
  var banniere = document.getElementById('banniere');
  var arrow = document.getElementById('arrow');
  $(window).scroll(function(){
    // console.log('page', window.pageYOffset);
    // console.log('banniere', banniere.offsetHeight);
    if(window.pageYOffset > (banniere.offsetHeight / 2 )){
      $(arrow).show();
      // console.log('visible');
    }
    else{
      $(arrow).hide();
      // console.log('cache');
    }
  })

  // carousel et modal

  // stop
  $(".modalFilms").click(function(){
    $("#carouselFilms").carousel("pause");
  });
  // restart
  $(".modal .btn").click(function(){
    $("#carouselFilms").carousel("cycle");
  });


//     // video dans modal
//     $('.modalFilms').click(function () {
//     var src = 'https://www.youtube.com/embed/whFAsePy-w8';
//     $('#ModalFilm1').modal('show');
//     $(' iframe').attr('src', src);
//     });
//
//     $('#ModalFilm1 .btn').click(function () {
//         $('#myModal iframe').removeAttr('src');
//     });
// <iframe width="560" height="315" src="https://www.youtube.com/embed/whFAsePy-w8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

// });



});

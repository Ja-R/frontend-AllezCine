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


//modal d'autorisation
$(document).ready(function() {
    $("#themodal").modal("show");
});

$("#out").click(function(){
    $("#themodal").modal("hide");
});

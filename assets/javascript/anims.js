// fleche vers le haut
var flecheTop;
var iconeTop;

flecheTop = document.createElement("a");
flecheTop.className = 'arrowTop';
flecheTop.setAttribute('href', '#banniere');
iconeTop = document.createElement("i");
iconeTop.className = 'fa fa-arrow-up';
flecheTop.appendChild(iconeTop)
document.body.appendChild(flecheTop);

var banniere = document.getElementById('banniere');

$(window).scroll(function(){
  if(window.pageYOffset > (banniere.offsetHeight / 2 )){
    $(flecheTop).show();  
  }
  else{
    $(flecheTop).hide();
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

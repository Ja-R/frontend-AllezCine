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
});

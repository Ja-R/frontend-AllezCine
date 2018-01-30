// slide photo JCVD

var i=0;
var imgJcvd=[
  {title: 'Jean-Claude Van Johnson', year: 2016, picture: 'asset/image/img jcvd/photojc/1-Jean-Claude Van Johnson (2016).jpg'},
  {title: 'The Expendables 2', year: 2012, picture: 'asset/image/img jcvd/photojc/2-The Expendables 2 (2012).jpg'},
  {title: 'The Shepherd', year: 2008, picture: 'asset/image/img jcvd/photojc/3-The Shepherd (2008).jpg'},
  {title: 'Hard Target', year: 1993, picture: 'asset/image/img jcvd/photojc/4-Hard Target (1993).jpg' },
  {title: 'Universal Soldier', year: 1992, picture: 'asset/image/img jcvd/photojc/5-Universal Soldier (1992).jpg'},
  {title: 'Bloodsport', year: 1988, picture: 'asset/image/img jcvd/photojc/6-Bloodsport (1988).jpg'}
];

var time = 2000;

var slidePhoto = document.getElementById('photosSlide');

// slide auto
function changeImg(){
  slidePhoto.src=imgJcvd[i].picture;
  if(i<imgJcvd.length-1){
      i++
      }else {
        i=0
      }
      setTimeout("changeImg()", time);
  }

// choix du visiteur
let selectPicture = function(title){
    for(let i=0; i<imgJcvd.length; i++){
        if(title == imgJcvd[i].title){
          slidePhoto.src=imgJcvd[i].picture;
        }
    }
}


$('#photographies-tab').on('click', function(){
  changeImg();
});

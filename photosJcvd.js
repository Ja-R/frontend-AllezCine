// slide photo JCVD

var i=0;
var imgJcvd=['asset/image/img jcvd/photojc/1-Jean-Claude Van Johnson (2016).jpg',
            'asset/image/img jcvd/photojc/2-The Expendables 2 (2012).jpg',
            'asset/image/img jcvd/photojc/3-The Shepherd (2008).jpg',
            'asset/image/img jcvd/photojc/4-Hard Target (1993).jpg',
            'asset/image/img jcvd/photojc/5-Universal Soldier (1992).jpg',
            'asset/image/img jcvd/photojc/6-Bloodsport (1988).jpg'
            ];
var time = 2000;

var slidePhoto = document.getElementById('photosSlide');

function changeImg(){
  slidePhoto.src=imgJcvd[i];

  if(i<imgJcvd.length-1){
      i++
      }else {
        i=0
      }
      setTimeout("changeImg()", time);
      
  }
  changeImg();

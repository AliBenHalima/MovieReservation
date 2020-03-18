var i=0;
var images= [];
 images[0] = 'assets/img/home/movieAd1.jpg';
 images[1] = 'assets/img/home/adsLogo.jpg';
 images[2] = 'assets/img/home/movieAd2.jpg';
 

var changeImages = ()=>{
    document.getElementById("AdsImageID").src = images[i] ;
    if (i<images.length -1){
    i++;
    }else{
        i=0;
    }
setTimeout('changeImages()',1500);
    };

window.onload=changeImages;


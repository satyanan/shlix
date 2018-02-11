var video = document.getElementById('video');
var source = document.createElement('source');

source.setAttribute('src', 'http://www.tools4movies.com/trailers/1012/Kill%20Bill%20Vol.3.mp4');

video.appendChild(source);
video.play();

setTimeout(function() {  
    video.pause();

    source.setAttribute('src', 'http://www.tools4movies.com/trailers/1012/Despicable%20Me%202.mp4'); 

    video.load();
    video.play();
}, 3000);
function setupJWPlayer(f){
  console.log("got a file: " + f);
  jwplayer('player_1').setup({
    file: "http://testing.grappler.tk/files/2013/01/trailer_1080p.mp4",
    width: "100%",
    height: "100%",
    stretching: "fill",
    flashplayer:"//cdn.jsdelivr.net/jwplayer/5.10/player.swf"
  });
  console.log("finished player setup");
}
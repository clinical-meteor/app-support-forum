Session.setDefault('show_reactive_overlay', false);
Session.setDefault('forum_admin_buttons', false);


Meteor.startup(function(){
  if(Meteor.userId()){
    setWallpaper();
  }else{
    removeWallpapers();
  }
});

// ======================================================
// HELPER FUNCTIONS

setWallpaper = function(){
  var user = Meteor.user();
  if(user){
    if(user.profile && user.profile.wallpaper){
      $('html').addClass(Meteor.user().profile.wallpaper);
    }
  }
};

removeWallpapers = function(){
  $('html').removeClass('noWallpaper');
  $('html').removeClass('greenWallpaper');
  $('html').removeClass('pinkWallpaper');
  $('html').removeClass('blueWallpaper');
  $('html').removeClass('rainbowWallpaper');
};

toggleSession = function(variable){
  if(Session.get(variable)){
    Session.set(variable, false);
  }else{
    Session.set(variable, true);
  }
}

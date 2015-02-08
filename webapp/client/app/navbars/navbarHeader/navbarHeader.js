Template.navbarHeader.events({
  'click #signUpButton, tap #signUpButton':function(){
    Router.go('/sign-up');
  },
  'click #headerTitle, tap #headerTitle':function(){
    Router.go('/');
  }
});



Template.navbarHeader.helpers({
  facebookNotConfigured: function(){
    if(ServiceConfiguration.configurations.findOne({service:'facebook'})){
      return false;
    }else{
      return true;
    }
  },
  navbarBrandLink: function () {
    if(Meteor.userId()){
      if(Session.set('forum_topic_id')){
        return '/forum';
      }else{
        return '/topics'
      }
    }else{
      return '/';
    }
  },
  navbarBrandName: function () {
    if(Session.get('settingsLoaded')){
      return Session.get('siteName');
    }else{
      return 'Site not ready...';
    }
  },
  userName: function () {
    var user = Meteor.user()
    if(user){
      return user && user.profile && user.profile.name;
    }else{
      return "---";
    }
  },
});

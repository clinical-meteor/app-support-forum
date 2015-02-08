Template.navbarFooter.events({
  'click .admin-panel, tap .admin-panel':function(){
    toggleSession('is_admin');
  },
  'click .search-panel, tap .search-panel':function(){
    toggleSession('show_search_panel');
  },
  'click #editPostButton, tap #editPostButton':function(){
    Session.set('user_intent', 'editpost');
    Router.go('/posts/' + Session.get('selected_post_id'));
  },
  'click #deletePostButton, tap #deletePostButton':function(){
    Posts.remove(Session.get('selected_post_id'));
    Topics.update(Session.get('forum_topic_id'), {$inc: {replies:  -1 }});
  }
});

Template.navbarFooter.helpers({
  canEdit: function(){
    if(Session.get('selected_post_creator_id') === Meteor.userId()){
      return true;
    }else{
      if(Meteor.user()){
        if(Meteor.user().role === "Admin"){
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    }
  },
  isTopicsPage: function () {
    if(Session.get('current_page') == 'Topics'){
      return true;
    }else{
      return false;
    }
  },
  isForumPage: function () {
    if(Session.get('current_page') == 'Forum'){
      if(Session.get('selected_post_id')){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  },
  isPostPage: function () {
      if(Session.get('current_page') == 'Post'){
        return true;
      }else{
        return false;
      }
  },
});

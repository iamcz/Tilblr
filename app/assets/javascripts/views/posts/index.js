Tilblr.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST["blogs/posts_index"],

  initialize: function () {
    this.listenTo(this.collection, "add remove", this.render);
  },

  render: function () {
    this.$el.html(this.template());

    // if (Tilblr.Models.currentUser.id === this.model.owner().id) {
    //   this.addNewPost();
    // }

    this.addPosts();
    
    return this;
  },

  addPosts: function () {
    debugger;
    this.collection.each(function (post) {
      var postView = new Tilblr.Views.PostView({ 
        model: post,
        collection: this.collection
      });
      this.addSubview("#posts", postView);
    }.bind(this));
  },

  addNewPost: function () {
    var newPostView = new Tilblr.Views.NewPost({
      model: this.model,
      collection: this.collection
    });
    this.addSubview("#posts", newPostView);
  }
})



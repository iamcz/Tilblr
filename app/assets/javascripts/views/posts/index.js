Tilblr.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST["blogs/posts_index"],

  initialize: function () {
    this.listenTo(this.collection, "add remove", this.render);
    this.collection.fetch();
    $(window).on("scroll", this.fetchMorePosts.bind(this));
  },

  render: function () {
    this.$el.html(this.template());

    if (Tilblr.Models.currentUser.id === this.model.owner().id) {
      this.addNewPost();
    }

    this.addPosts();
    
    return this;
  },

  addPosts: function () {
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
  },

  fetchMorePosts: function (event) {
    console.log($(window).scrollTop(), $(document).height() - $(window).height())
    if ($(window).scrollTop() === $(document).height() - $(window).height()) {
      this.collection.fetch();
    }
  }
})



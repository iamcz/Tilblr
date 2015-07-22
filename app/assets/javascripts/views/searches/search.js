Tilblr.Views.SearchView = Backbone.CompositeView.extend({
  template: JST["searches/search"],
  initialize: function (options) {
    this.blogResults = options.blogResults;
    this.postResults = options.postResults;
  },

  render: function () {
    this.$el.html(this.template());

    this.addBlogResults();
    this.addPostResults();
  },

  addBlogResults: function () {
    var blogSearch = new Tilblr.Views.BlogSearch({
      collection: this.blogResults
    });

    this.addSubview("#search", blogSearch);
  },

  addPostResults: function () {
    var postSearch = new Tilblr.Views.PostSearch({
      collection: this.postResults
    });

    this.addSubview("#search", postSearch);
  }
})

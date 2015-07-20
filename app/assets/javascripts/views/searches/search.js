Tilblr.Views.SearchView = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.blogResults = options.blogResults;
    this.searchResults = options.postResults;
  },

  render: function () {
    var blogSearch = new Tilblr.Views.BlogSearch({
      el: "#blog-results",
      collection: this.blogResults
    });

    this.addSubview("#blog-results", blogSearch)

    var postSearch = new Tilblr.Views.PostSearch({
      el: "#post-results",
      collection: this.blogResults
    });

    this.addSubview("#post-results", postSearch);
  }
})

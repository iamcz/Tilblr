Tilblr.Views.SearchView = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.blogResults = options.blogResults;
    this.searchResults = options.postResults;
  }
})

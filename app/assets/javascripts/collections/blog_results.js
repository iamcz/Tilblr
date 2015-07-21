Tilblr.Collections.BlogResults = Backbone.Collection.extend({
  model: Tilblr.Models.Blog,
  url: function () {
    return "/api/search"
  },
  
  initialize: function (models, options) {
    this.query = options.query;
  },

  fetch: function () {
    Backbone.Collection.prototype.fetch.call(this, {
      data: { search: { type: "blog", query: this.query } }
    });
  }
})

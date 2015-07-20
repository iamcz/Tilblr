Tilblr.Collections.PostResults = Backbone.Collection.extend({
  model: Tilblr.Models.Post,
  url: function () {
    return "/api/search"
  },
  
  initialize: function (options) {
    this.query = options.query;
  },

  fetch: function () {
    Backbone.Collection.prototype.fetch.call(this, {
      data: { search: { type: "post", query: this.query } }
    });
  }
})

Tilblr.Models.Blog = Backbone.Model.extend({
  urlRoot: "/api/blogs/",

  parse: function (response) {
    if (response.owner) {
      this.owner().set(response.owner);
      delete response.owner;
    }

    return response;
  },

  owner: function () {
    this._owner = this._owner || new Tilblr.Models.User();

    return this._owner;
  }
})

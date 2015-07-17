Tilblr.Models.Post = Backbone.Model.extend({
  urlRoot: "/api/posts",

  toJSON: function () {
    return {post: _.clone(this.attributes)};
  },

  parse: function (response) {
    if (response.blog) {
      this.blog().set(response.blog);
      delete response.blog;
    }

    return response;
  },

  validate: function (attrs) {
    if (attrs.body === "") {
      return "body can't be blank";
    }
  },

  blog: function () {
    this._blog = this._blog || new Tilblr.Models.Blog()

    return this._blog;
  }
});

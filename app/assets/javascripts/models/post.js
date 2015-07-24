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

    if (response.tags) {
      debugger;
      this.tags().set(response.tags);
      delete response.tags;
    }

    return response;
  },

  validate: function (attrs) {
    if (attrs.body === "") {
      return "body can't be blank";
    }
  },

  blog: function () {
    this._blog = this._blog || new Tilblr.Models.Blog();

    return this._blog;
  },

  tags: function () {
    this._tags = this._tags || new Tilblr.Collections.Tags();

    return this._tags;
  }
});

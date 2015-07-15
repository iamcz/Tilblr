Tilblr.Models.Post = Backbone.Model.extend({
  urlRoot: "/api/posts",

  toJSON: function () {
    return {post: _.clone(this.attributes)};
  }
});

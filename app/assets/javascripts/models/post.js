Tilblr.Models.Post = Backbone.Model.extend({
  urlRoot: "/api/posts",

  toJSON: function () {
    return {post: _.clone(this.attributes)};
  },

  validate: function (attrs) {
    if (attrs.body === "") {
      return "body can't be blank";
    }
  }
});

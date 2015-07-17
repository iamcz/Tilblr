Tilblr.Collections.Follows = Backbone.Collection.extend({
  model: Tilblr.Models.Follow,

  findOrFetch: function (attributes) {
    var follow = this.findWhere(attributes);

    if (typeof follow === "undefined") {
      follow = new Tilblr.Models.Follow(attributes);
      follow.fetch();
    }

    return follow;
  }
});

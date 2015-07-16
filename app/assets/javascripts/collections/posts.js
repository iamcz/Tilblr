Tilblr.Collections.Posts = Backbone.Collection.extend({
  url: "/api/posts",
  model: Tilblr.Models.Post,

  comparator: function (thisPost, otherPost) {
    var thisDate = Date.parse(thisPost.get("created_at"));
    var otherDate = Date.parse(otherPost.get("created_at"));

    if (thisDate < otherDate) {
      return 1;
    } else if (thisDate > otherDate) {
      return -1;
    } else {
      return 0;
    }
  }
});

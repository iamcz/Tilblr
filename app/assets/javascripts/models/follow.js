Tilblr.Models.Follow = Backbone.Model.extend({
  url: function () {
    return "/api/blogs/" + this.get("followed_id") + "/follow"
  }
});

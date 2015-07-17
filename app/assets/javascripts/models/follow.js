Tilblr.Models.Follow = Backbone.Model.extend({
  url: function () {
    return "/api/blogs/" + this.get("followee_id") + "/follow"
  }
});

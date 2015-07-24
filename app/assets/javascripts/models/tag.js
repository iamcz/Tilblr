Tilblr.Models.Tag = Backbone.Model.extend({
  toHTML: function () {
    return "<a href='#'>" + this.escape("name") + "</a>";
  }
});

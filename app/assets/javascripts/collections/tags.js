Tilblr.Collections.Tags = Backbone.Collection.extend({ 
  model: Tilblr.Models.Tag,

  toHTML: function () {
    return this.models.map(function (tag) { return tag.toHTML(); }).join(" ");
  }
});

Tilblr.Views.FollowButton = Backbone.View.extend({
  tagName: "button",
  className: "follow-button",
  events: {
    "click": "toggleFollow"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  this.render: function () {
    var text;
    if (this.model.isNew()) {
      text = "Follow";
    } else {
      text = "Unfollow";
    }

    this.$el.prop({disabled: false});
    this.$el.html(text);
  }

  toggleFollow: function () {
    if (this.model.isNew()) {
      this.model.save()
    } else {
      this.model.destroy({
        success: function () {
          var followed_id = this.model.get("followed_id")
          this.collection.remove(this.model);
          this.model = new Tilblr.Models.Follow({})
          this.collection.add(this.model);
        }
      });
    }
  }
})

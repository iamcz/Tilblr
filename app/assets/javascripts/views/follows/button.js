Tilblr.Views.FollowButton = Backbone.View.extend({
  tagName: "button",
  className: "follow",
  events: {
    "click": "toggleFollow"
  },

  initialize: function () {
    this.listenTo(this.model, "sync change", this.render);
  },

  render: function () {
    var text;
    if (this.model.isNew()) {
      text = "Follow";
    } else {
      text = "Unfollow";
    }

    this.$el.prop({disabled: false});
    this.$el.html(text);
  },

  toggleFollow: function (event) {
    event.preventDefault();
    this.$el.prop({disabled: true});

    if (this.model.isNew()) {
      this.model.save({}, {wait: true});
    } else {
      this.model.destroy({
        wait: true,
        success: function () {
          var followed_id = this.model.get("followed_id");
          this.model.clear();
          this.model.set({followed_id: followed_id})
        }.bind(this)
      });
    }
  }
})

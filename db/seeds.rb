# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


10.times do
  name = Faker::Name.name
  email = Faker::Internet.email(name)
  username = Faker::Internet.user_name(name)
  password = "password"

  user = User.new(email: email, username: username, password: password)
  user.save
  5.times do |i|
    title = "blog-#{i}"
    blog = user.blogs.new(title: title, tag_names: "lorem")
    blog.save

    50.times do |j|
      title = "post-#{j}"
      body = Faker::Lorem.paragraphs(2).join("\n")
      post = blog.posts.new(title: title, body: body, tag_names: "ipsum")
      post.save
    end
  end
end



ruby_tags = "ruby meta"
rails_tags = "ruby rails"
backbone_tags = "javascript backbone"
js_tags = "javascript bad"
css_tags = "css style pretty"

guest_user = User.create!( username: "guest user", email: "guest@tilblr.com", password: "password")
gues_user.active_blog.udpate!(title: "Guest Blog")

rails_user = User.create!( username: "rails blogger", email: "railsenthusiast@gmail.com", password: "railsisthebest" )
rails_user.active_blog.update!(title: "Rails Blog", tag_names: rails_tags)
back_user = User.create!( username: "backbone blogger", email: "backbone@yahoo.com", password: "backbone" )
back_user.active_blog.update!(title: "Backbone Blog", tag_names: backbone_tags)
css_user = User.create!( username: "css blogger", email: "cascade@gmail.com", password: "stylesfordays" )
css_user.active_blog.update!(title: "CSS Blog", tag_names: css_tags)
ruby_user = User.create!( username: "ruby blogger", email: "rubybaby@yahoo.com", password: "metameta" )
ruby_user.active_blog.update!(title: "Ruby Blog", tag_names: ruby_tags)
js_user = User.create!( user: "js blogger", email: "javascript@gmail.com", password: "falseyvalue" )
js_user.active_blog.update!(title: "Javascript Blog",tag_names: js_tags)

ruby_user.active_blog.follow(rails_user.active_blog)
rails_user.active_blog.follow(ruby_user.active_blog)
rails_user.active_blog.follow(back_user.active_blog)
back_user.active_blog.follow(js_user.active_blog)
js_user.active_blog.follow(back_user.active_blog)
js_user.active_blog.follow(css_user.active_blog)
css_user.active_blog.follow(js_user.active_blog)
css_user.active_blog.follow(ruby_user.active_blog)

guest_user.active_blog.follow(rails_user)
guest_user.active_blog.follow(ruby_user)
guest_user.active_blog.follow(backbone_user)

rails_user.active_blog.posts.create!(
  title: "inverse_of",
  body: "inverse_of is an option that you can pass to an ActiveRecord association" +
        " that is used when creating many types of interdependent records at once.",
  tag_names: rails_tags
)
rails_user.active_blog.posts.create!(
  title: "Concerns",
  body: "rails concerns can be used to factor out a shared functionality of many" +
        " related rails objects (models, views, controllers).",
  tag_names: rails_tags
)

back_user.active_blog.posts.create!(
  title: "Collections",
  body: "Collections are used when dealing with many related models at once.",
  tag_names: backbone_tags
)
back_user.active_blog.posts.create!(
  title: "The el option",
  body: "A view's constructor can take an option for el that will attach a view " +
        "to an element that is already on the page, setting the $el property as well",
  tag_names: backbone_tags
)

css_user.active_blog.posts.create!(
  title: "position: fixed",
  body: "giving an element a fixed position fixes the element to a position " +
        "relative to the window.",
  tag_names: css_tags
)

ruby_user.active_blog.posts.create!(
  title: "Metaprogramming",
  body: "Metaprogramming is awesome",
  tag_names: ruby_tags
)

js_user.active_blog.posts.create!(
  title: '0 == ""',
  body: 'in javascript 0 == ""',
  tag_names: js_tags
)



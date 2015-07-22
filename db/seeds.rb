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
    blog = user.blogs.new(title: title)
    blog.save

    10.times do |j|
      title = "post-#{j}"
      body = Faker::Lorem.paragraphs(1)
      post = blog.posts.new(title: title, body: body)
      post.save
    end
  end
end

User.create!( username: "guest user", email: "guest@tilblr.com", password: "password")

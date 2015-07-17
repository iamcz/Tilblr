json.id @user.id
json.username @user.username

json.active_blog do
  json.extract! @user.active_blog, :id, :title

  json.follows @user.active_blog.followed_follows do |follow|
    json.extract! follow, :id, :follower_id, :followee_id
  end

  json.followers @user.active_blog.follower_follows do |follower|
    json.extract! follower, :id, :follower_id, :followee_id
  end
end

json.blogs @user.blogs do |blog|
  json.extract! blog, :id, :title
end

json.id @user.id
json.username @user.username

json.active_blog do
  json.extract! @user.active_blog, :id, :title

  json.follows @user.active_blog.follows_follows do |follow|
    json.extract! follow, :id, :follower_id, :followee_id
  end

  json.followers @user.active_blog.followers_follows do |follower|
    json.extract! follower, :id, :follower_id, :followee_id
  end
end

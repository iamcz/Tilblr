json.id @user.id
json.username @user.username

json.active_blog do
  json.extract! @user.active_blog, :id, :title
  json.follows do 
    json.array! @user.active_blog.follows_follows do |follows_follow|
      json.id follows_follow.followee_id
    end
  end
  json.followers do 
    json.array! @user.active_blog.followers_follows do |followers_follow|
      json.id followers_follow.follower_id
    end
  end
end

json.extract! @blog, :id, :title

json.followed_blogs @blog.followed_blogs do |followed_blog|
  json.extract! followed_blog, :id, :title
end

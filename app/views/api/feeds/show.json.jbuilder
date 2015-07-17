json.extract! @blog, :id, :title

json.posts @feed do |post|
  json.extract! post, :id, :title, :body
end
# json.followed_blogs @blog.followed_blogs do |followed_blog|
#   json.extract! followed_blog, :id, :title
# end

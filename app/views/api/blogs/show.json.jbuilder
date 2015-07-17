json.extract! @blog, :id, :title

json.posts @blog.posts do |post|
  json.extract! post, :id, :blog_id, :title, :body, :created_at
end

json.owner do 
  json.extract! @blog.owner, :id, :username
end

json.partial! 'api/blogs/blog', blog: @blog

json.posts @blog.posts do |post|
  json.extract! post, :id, :title, :body, :tag_names, :created_at
  json.blog do
    json.extract! post.blog, :id, :title
  end
end

json.owner do 
  json.extract! @blog.owner, :id, :username
end

json.partial! 'api/blogs/blog', blog: blog

json.posts blog.posts.limit(3) do |post|
  json.extract! post, :id, :title, :body, :created_at
end

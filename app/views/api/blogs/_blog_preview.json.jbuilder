json.extract! blog, :id, :title

json.posts blog.posts.limit(3) do |post|
  json.extract! post, :id, :title, :body, :created_at
end

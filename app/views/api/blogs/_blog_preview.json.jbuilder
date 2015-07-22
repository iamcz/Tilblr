json.extract! blog, :id, :title
json.avatar_url blog.avatar.url

json.posts blog.posts.limit(3) do |post|
  json.extract! post, :id, :title, :body, :created_at
end

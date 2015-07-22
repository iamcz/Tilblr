json.posts @posts do |post|
  json.extract! post, :id, :title, :body, :tag_names, :created_at
  json.blog do
    json.partial! 'api/blogs/blog', blog: @blog
  end
end


json.extract! @post, :id, :title, :body, :tag_names, :created_at

json.blog do
  json.partial! 'api/blogs/blog', blog: @post.blog
end

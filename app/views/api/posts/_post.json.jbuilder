json.extract! post, :id, :title, :body, :tag_names, :created_at

json.tags do
  json.array! post.tags do |tag|
    json.extract! tag, :name
  end
end

json.blog do
  json.partial! 'api/blogs/blog', blog: post.blog
end

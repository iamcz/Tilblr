json.array! @posts do |post|
  json.partial! 'api/posts/post', post: post
  json.blog do
    json.partial! 'api/blogs/blog', blog: post.blog
  end
end


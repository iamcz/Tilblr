json.partial! 'api/blogs/blog', blog: @blog

json.owner do 
  json.extract! @blog.owner, :id, :username
end

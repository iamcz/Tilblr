json.extract! @blog, :id, :title
json.owner do 
  json.username @blog.owner.username
end

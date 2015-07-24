json.extract! @blog, :id, :title

json.owner do 
  json.extract! @blog.owner, :id, :username
end

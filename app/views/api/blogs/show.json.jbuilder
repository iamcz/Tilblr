json.extract! @blog, :id, :title

json.posts do 
  json.array! @blog.posts do |post|
    json.extract! post, :id, :title, :body, :created_at
  end
end

json.owner do 
  json.username @blog.owner.username
end

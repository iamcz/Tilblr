json.extract! post, :id, :title, :body, :created_at

json.blog do
  json.extract! :id, :title
end

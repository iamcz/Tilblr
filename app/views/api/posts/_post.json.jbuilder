json.extract! post, :id, :title, :body, :tag_names, :created_at

json.blog do
  json.extract! :id, :title
end

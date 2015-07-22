json.array! @blogs do |blog|
  json.extract! blog, :id, :title
  json.avatar_url blog.avatar.url
end

json.array! @blogs do |blog|
  json.extract! blog, :id, :title
end

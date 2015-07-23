json.array! @results do |post_result|
  json.partial! 'api/posts/post', post: post_result
end

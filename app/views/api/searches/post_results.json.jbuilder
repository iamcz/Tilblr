json.array! @results do |post_result|
  json.partial! post: post_result
  debugger
  # json.extract! post_result, :title, :body

  # json.blog do
  #   json.extract! post_result.blog, :title
  # end
end

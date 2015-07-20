unless @results.empty?
  json.array! @results.tagged_posts do |post_result|
    json.partial! post: post_result
    debugger
  end
else
  json.array! []
end

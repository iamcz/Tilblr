unless @results.empty?
  json.array! @results.first.tagged_posts do |post_result|
    json.partial! post: post_result
  end
else
  json.array! []
end

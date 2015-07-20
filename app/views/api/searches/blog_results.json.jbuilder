unless @results.empty?
  json.array! @results.first.tagged_blogs do |blog_result|
    json.partial! 'api/blogs/blog_preview', blog: blog_result
  end
else
  json.array! []
end

json.array! @results do |blog_result|
  json.partial! 'api/blogs/blog_preview', blog: blog_result
end

FactoryGirl.define do
  factory :post do
    title "MyString"
    body "MyText"
    blog_id 0

    factory :post_with_blog_and_user do
      after(:build) do |post|
        user = build(:user) 
        blog = build(:blog, user: user)
        post.blog = blog
      end
    end
  end

end

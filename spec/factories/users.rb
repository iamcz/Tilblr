FactoryGirl.define do
  factory :user do
    username "username"
    password "password"
    email "example@email.com"
    active_blog_id = 0

    factory :user_with_active_blog do
      after(:build) do |user|
        blog = build(:blog, active_user: user)
      end

      factory :user_with_post do 
        after(:build) do |user|
          post = build(:post, blog: user.active_blog)
        end
      end
    end
  end
end

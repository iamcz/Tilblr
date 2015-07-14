FactoryGirl.define do
  factory :user do
    username "username"
    password "password"
    email "example@email.com"
    active_blog_id = 0

    factory :user_with_active_blog do
      after(:build) do |user|
        blog = build(:blog, owner: user)
        user.active_blog = blog
      end
    end
  end
end

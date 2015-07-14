FactoryGirl.define do
  factory :blog do
    title "MyString"
    user_id 0

    factory :blog_with_user do
      after(:build) do |blog|
        build(:user, blogs: [blog]);
      end
    end

  end
end

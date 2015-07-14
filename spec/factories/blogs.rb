FactoryGirl.define do
  factory :blog do
    title "MyString"

    after(:build) do |blog|
      build(:user, blogs: [blog]);
    end
  end
end

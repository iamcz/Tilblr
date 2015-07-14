require 'rails_helper'

RSpec.describe Blog, type: :model do
  it "should require a title" do
    expect(build(:blog_with_user, title: "")).not_to be_valid
  end

  it "should require a owner" do
    expect(build(:blog)).not_to be_valid
  end

  it "should be valid when it has a title and a owner" do
    expect(build(:blog_with_user)).to be_valid
  end
end

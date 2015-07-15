require 'rails_helper'

RSpec.describe Post, type: :model do
  it "should be invalid without a body" do
    expect(build(:post, body: "")).not_to be_valid
  end

  it "should be invalid without a blog_id" do
    expect(build(:post, blog_id: nil)).not_to be_valid
  end

  it "should be valid given all attributes" do
    expect(build(:post)).to be_valid
  end

  it "should be valid even without a title" do 
    expect(build(:post, title: "")).to be_valid
  end

  it "should be associated with a blog" do
    expect(build(:post_with_blog_and_user).blog).to be
  end

  it "should be associated with a user" do
    expect(build(:post_with_blog_and_user).user).to be
  end
end

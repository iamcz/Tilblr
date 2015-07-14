require 'rails_helper'

RSpec.describe Blog, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"

  it "should require a title" do
    expect(build(:blog, title: "")).not_to be_valid
  end
end

require 'rails_helper'

RSpec.describe User, type: :model do
  it "requires a username" do
    expect(build(:user, username: "")).not_to be_valid
  end

  it "requires a password with a minimum length" do
    expect(build(:user, password: "passwor")).not_to be_valid
  end

  it "requires a valid email" do
    expect(build(:user, email: "xxxxx")).not_to be_valid
  end

  it "is valid when a valid username, password, and email are specified" do
    expect(build(:user)).to be_valid
  end
end

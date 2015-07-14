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

  it "has a session token" do
    expect(build(:user).session_token).to be
  end

  it "can be found by credentials" do
    user = build(:user)
    user.save

    expect(User.find_by_credentials(user.email, user.password)).to eq(user)
  end

  it "doesn't store the password" do
    user = build(:user) 
    expect(user.password).not_to eq(user.password_digest)

    expect(User.column_names).not_to include("password")
  end
end

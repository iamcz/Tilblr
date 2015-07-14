describe User do
  it "requires a username" do
    expect(build(:user, username: "" )).not_to be_valid
  end

  it "requires a valid email address" do
    expect(build(:user, email: "email" )).not_to be_valid
  end

  it "requires a password with a minimum length" do
    expect(build(:user, password: "passwor" )).not_to be_valid
  end

  it "is valid when a valid username, email, and password are specified" do
    expect(build(:user)).to be_valid
  end
end

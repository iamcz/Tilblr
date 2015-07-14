class User < ActiveRecord::Base

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  attr_accessor :password
  validates :username, presence: true
  validates :password, length: {minimum: 8, allow_nil: true}
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }

  def password=(password) 
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end

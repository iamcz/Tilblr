class User < ActiveRecord::Base

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  attr_accessor :password
  validates :username, presence: true
  validates :password, length: {minimum: 8, allow_nil: true}
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }

  after_initialize :ensure_session_token

  def password=(password) 
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  private

  def ensure_session_token
    return if self.session_token
    self.reset_session_token
  end
end

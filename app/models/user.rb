class User < ActiveRecord::Base

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  attr_accessor :password
  validates :username, :session_token, :password_digest, :active_blog, presence: true
  validates :password, length: {minimum: 8, allow_nil: true}
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }

  after_initialize :ensure_session_token
  before_validation :ensure_active_blog

  has_many :blogs, inverse_of: :owner
  belongs_to :active_blog, class_name: "Blog", foreign_key: :active_blog_id, inverse_of: :active_user

  def self.find_by_credentials(email, password) 
    user = User.find_by_email(email)
    return unless user

    BCrypt::Password.new(user.password_digest).is_password?(password) ? user : nil
  end

  def password=(password) 
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.update(session_token: SecureRandom.urlsafe_base64)

    self.session_token
  end

  private

  def ensure_session_token
    return if self.session_token
    reset_session_token
  end

  def ensure_active_blog 
    return if self.active_blog

    if self.blogs.empty?
      self.blogs = [Blog.new(title: "Untitled")]
    end

    self.active_blog = self.blogs.first
  end
end

class Blog < ActiveRecord::Base
  validates :title, :owner, presence: true

  belongs_to :owner, class_name: "User", foreign_key: :user_id, inverse_of: :blogs
  has_one :active_user, class_name: "User", foreign_key: :active_blog_id, inverse_of: :active_blog

  has_many :posts, inverse_of: :blog
end

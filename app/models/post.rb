class Post < ActiveRecord::Base
  validates :body, :blog_id, presence: true

  belongs_to :blog, inverse_of: :posts
  has_one :user, through: :blog, source: :owner
end

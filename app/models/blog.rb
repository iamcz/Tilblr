class Blog < ActiveRecord::Base
  validates :title, :owner, presence: true

  belongs_to :owner, class_name: "User", foreign_key: :user_id, inverse_of: :blogs
  has_one :active_user, class_name: "User", foreign_key: :active_blog_id, inverse_of: :active_blog

  has_many :posts, inverse_of: :blog
  has_many :follows_follows, class_name: "Follow", foreign_key: :follower_id, inverse_of: :followee
  has_many :follows, through: :follows_follows, source: :followee
  has_many :followers_follows, class_name: "Follow", foreign_key: :followee_id, inverse_of: :followee
  has_many :followers, through: :followers_follows, source: :follower

  def follow(blog) 
    follow = Follow.new(follower_id: self.id, followee_id: blog.id)
    follow.save
  end

  def unfollow(blog) 
    follow = self.follows_follows.find(blog.id)
    follow.destroy
  end
end

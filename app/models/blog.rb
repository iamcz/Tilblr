class Blog < ActiveRecord::Base
  include Taggable

  validates :title, :owner, presence: true

  belongs_to :owner, class_name: "User", foreign_key: :user_id, inverse_of: :blogs
  has_one :active_user, class_name: "User", foreign_key: :active_blog_id, inverse_of: :active_blog

  has_many :posts, inverse_of: :blog
  has_many :followed_follows, class_name: "Follow", foreign_key: :follower_id, inverse_of: :follower
  has_many :followed_blogs, through: :followed_follows, source: :followed
  has_many :follower_follows, class_name: "Follow", foreign_key: :followed_id, inverse_of: :followed
  has_many :follower_blogs, through: :follower_follows, source: :follower

  has_many :followed_blog_posts, through: :followed_blogs, source: :posts

  has_attached_file :avatar, styles: { small: "64x64>" }, default_url: "https://secure.assets.tumblr.com/images/default_avatar/cone_closed_64.png"
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/

  def follow(blog) 
    follow = Follow.new(follower_id: self.id, followed_id: blog.id)
    follow.save

    follow
  end

  def unfollow(blog) 
    follow = self.followed_follows.find_by_followed_id(blog.id)
    
    follow ? follow.destroy : nil
  end

  def feed
    id_sql = [followed_blog_posts, posts].map do |assoc| 
      "(#{assoc.select(:id).to_sql})"
    end.join(" union ")

    Post.order(created_at: :desc)
      .includes(:tags, :blog => :tags)
      .where("id IN (#{id_sql})")
  end
end

class Tag < ActiveRecord::Base
  validates :name, presence: true

  has_many :taggings, inverse_of: :tag
  has_many :tagged_posts, through: :taggings, source: :taggable, source_type: Post
  has_many :tagged_blogs, through: :taggings, source: :taggable, source_type: Blog
end

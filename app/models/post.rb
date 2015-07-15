class Post < ActiveRecord::Base
  validates :body, :blog_id, presence: true

  belongs_to :blog
end

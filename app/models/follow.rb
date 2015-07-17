class Follow < ActiveRecord::Base
  validates :follower_id, :followed_id, presence: true
  validates :follower_id, uniqueness: { scope: :followed_id }
  belongs_to :follower, class_name: "Blog", foreign_key: :follower_id, inverse_of: :followed_follows
  belongs_to :followed, class_name: "Blog", foreign_key: :followed_id, inverse_of: :follower_follows
end

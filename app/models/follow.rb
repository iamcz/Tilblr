class Follow < ActiveRecord::Base
  validates :follower_id, :followee_id, presence: true
  belongs_to :follower, class_name: "Blog", foreign_key: :follower_id, inverse_of: :follows_follows
  belongs_to :followee, class_name: "Blog", foreign_key: :followee_id, inverse_of: :followers_follows
end

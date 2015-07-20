class Tagging < ActiveRecord::Base
  belongs_to :taggable, polymorphic: true
  belongs_to :tag, inverse_of: :taggings

  validates :taggable_id, uniqueness: { scope: :tag_id }
end

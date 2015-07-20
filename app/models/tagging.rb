class Tagging < ActiveRecord::Base
  belongs_to :taggable, polymorphic: true, inverse_of: :taggings
  belongs_to :tag, inverse_of: :taggings
end

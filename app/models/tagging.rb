class Tagging < ActiveRecord::Base
  belongs_to :taggable, polymorphic: true, inverse_of: :tagging
  belongs_to :tag, inverse_of: :tagging
end

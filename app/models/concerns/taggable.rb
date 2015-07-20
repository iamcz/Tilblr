module Taggable
  extend ActiveSupport::Concern

  included do
    has_many :taggings, as: :taggable, inverse_of: :taggable
    has_many :tags, through: :taggings, source: :tag
  end
end

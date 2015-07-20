module Taggable
  include ActiveSupport::Concern

  included do
    has_many :taggings, inverse_of: :taggable
    has_many :tags, through: :taggings, source: :tag
  end
end

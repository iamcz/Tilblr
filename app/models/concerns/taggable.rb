module Taggable
  extend ActiveSupport::Concern

  included do
    has_many :taggings, as: :taggable
    has_many :tags, through: :taggings, source: :tag
  end

  def tag_names
    tags.map(&:name)
  end

  def tag_names=(tag_names) 
    new_taggings = []

    tag_names.split.each do |tag_name|
      tag = Tag.find_or_create_by(name: tag_name)
      new_taggings << taggings.find_or_create_by(tag_id: tag.id)
    end

    self.taggings = new_taggings
  end
end

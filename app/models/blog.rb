class Blog < ActiveRecord::Base
  belongs_to :user

  validates :title, presence: true
end

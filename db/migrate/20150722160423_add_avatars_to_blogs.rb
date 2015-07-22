class AddAvatarsToBlogs < ActiveRecord::Migration
  def change
    add_attachment :blogs, :avatar
  end
end

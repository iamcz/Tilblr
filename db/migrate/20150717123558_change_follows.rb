class ChangeFollows < ActiveRecord::Migration
  def change
    rename_column :follows, :followee_id, :followed_id
  end
end

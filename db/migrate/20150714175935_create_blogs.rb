class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :title, null: false
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

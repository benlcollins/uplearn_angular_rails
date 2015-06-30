class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :title
      t.text :body
      t.string :url
      t.integer :upvotes

      t.timestamps null: false
    end
  end
end

class CreateContents < ActiveRecord::Migration
  def change
    create_table :contents do |t|
      t.string :commenter
      t.text :body

      t.timestamps
    end
  end
end

class CreateMountains < ActiveRecord::Migration[5.1]
  def change
    create_table :mountains do |t|
      t.text :name
      t.float :height
      t.text :place
      t.text :image
      t.timestamps

    end
  end
end

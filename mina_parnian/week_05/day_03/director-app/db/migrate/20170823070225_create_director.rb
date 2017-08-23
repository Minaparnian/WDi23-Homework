class CreateDirector < ActiveRecord::Migration[5.1]
  def change
    create_table :directors do |t|
      t.text :name
      t.text :nationality
      t.text :dob
      t.text :years_active
      t.text :image
      t.timestamps
    end
  end
end

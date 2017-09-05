class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.text :name
      t.text :genre
      t.text :release_date
      t.text :box_office
      t.text :image
    end
  end
end

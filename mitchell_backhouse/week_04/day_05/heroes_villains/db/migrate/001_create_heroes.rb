class CreateHeroes < ActiveRecord::Migration[5.1]
    def up
        create_table :heroes do |t|
            t.string :name
            t.string :description
            t.string :powers
            t.integer :rating
            t.integer :publisher_id
        end
    end

    def down
        drop_table :heroes
    end
end

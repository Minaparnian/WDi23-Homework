class CreatePublishers < ActiveRecord::Migration[5.1]
    def up
        create_table :publishers do |t|
            t.string :name
        end
    end

    def down
        drop_table :publishers
    end
end

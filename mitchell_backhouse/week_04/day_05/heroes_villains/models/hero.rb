class Hero < ActiveRecord::Base
    self.table_name = 'heroes'

    belongs_to :publisher
end

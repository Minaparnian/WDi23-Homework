class Publisher < ActiveRecord::Base
    has_many :heroes
    has_many :villains
end

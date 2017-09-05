# == Schema Information
#
# Table name: movies
#
#  id           :integer          not null, primary key
#  name         :text
#  genre        :text
#  release_date :text
#  box_office   :text
#  image        :text
#

class Movie < ActiveRecord::Base
end

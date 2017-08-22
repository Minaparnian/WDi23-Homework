# == Schema Information
#
# Table name: mountains
#
#  id         :integer          not null, primary key
#  name       :text
#  height     :float
#  place      :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Mountain < ActiveRecord::Base
end

# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  name        :string           default(""), not null
#  description :string           default(""), not null
#  date        :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ActiveRecord::Base
end

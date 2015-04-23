# == Schema Information
#
# Table name: family_events
#
#  id         :integer          not null, primary key
#  family_id  :integer
#  event_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class FamilyEvent < ActiveRecord::Base

  ##################################################
  # Associations
  ##################################################
  belongs_to :family
  belongs_to :event

end

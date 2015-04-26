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

require 'test_helper'

class FamilyEventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

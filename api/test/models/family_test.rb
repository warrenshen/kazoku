# == Schema Information
#
# Table name: families
#
#  id           :integer          not null, primary key
#  name         :string           default(""), not null
#  size         :integer          default("0"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  events_count :integer          default("0"), not null
#

require 'test_helper'

class FamilyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

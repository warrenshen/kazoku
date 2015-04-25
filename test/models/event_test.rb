# == Schema Information
#
# Table name: events
#
#  id             :integer          not null, primary key
#  name           :string           default(""), not null
#  description    :string           default(""), not null
#  image_url      :string           default(""), not null
#  date           :date
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  families_count :integer          default("0"), not null
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

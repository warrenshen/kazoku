# == Schema Information
#
# Table name: sessions
#
#  id             :integer          not null, primary key
#  is_expired     :boolean          default("false"), not null
#  is_logged_in   :boolean          default("true"), not null
#  uuid           :string           not null
#  last_active_at :datetime
#  person_id      :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class SessionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

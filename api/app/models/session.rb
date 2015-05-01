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

class Session < ActiveRecord::Base

  ##################################################
  # Associations
  ##################################################
  belongs_to :person

  ##################################################
  # Validations
  ##################################################
  validates :uuid,           presence: true
  validates :last_active_at, presence: true

  ##################################################
  # Callbacks
  ##################################################
  before_validation :set_properties, on: :create
  before_validation :update_properties, except: :create


end

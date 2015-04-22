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

  ##################################################
  # Associations
  ##################################################
  has_many :family_events, dependent: :destroy
  has_many :families, through: :family_events

  ##################################################
  # Validations
  ##################################################
  validates :name,        presence: true
  validates :description, presence: true
  validates :date,        presence: true

end

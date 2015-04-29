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

class Family < ActiveRecord::Base

  ##################################################
  # Associations
  ##################################################
  has_many :people
  has_many :family_events, dependent: :destroy
  has_many :events, through: :family_events

  ##################################################
  # Validations
  ##################################################
  validates :name, presence: true, uniqueness: true

  ##################################################
  # Methods
  ##################################################
  def size
    people.size
  end

end

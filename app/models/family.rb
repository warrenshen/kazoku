# == Schema Information
#
# Table name: families
#
#  id         :integer          not null, primary key
#  name       :string           default(""), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  size       :integer          default("0"), not null
#

class Family < ActiveRecord::Base

  ##################################################
  # Associations
  ##################################################
  has_many :users
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
    users.size
  end

end

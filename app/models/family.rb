# == Schema Information
#
# Table name: families
#
#  id         :integer          not null, primary key
#  name       :string           default(""), not null
#  event_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  size       :integer          default("0"), not null
#

class Family < ActiveRecord::Base

  ##################################################
  # Associations
  ##################################################
  belongs_to :event

  has_many :people

  ##################################################
  # Validations
  ##################################################
  validates :name, presence: true, uniqueness: true

  ##################################################
  # Callbacks
  ##################################################
  before_validation :set_size

  ##################################################
  # Methods
  ##################################################
  def set_size
    self.size = people.count
  end

end

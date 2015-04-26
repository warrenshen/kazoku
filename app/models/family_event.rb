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
  belongs_to :event
  belongs_to :family

  ##################################################
  # Validations
  ##################################################
  validates :event,  presence: true
  validates :family, presence: true

  ##################################################
  # Callbacks
  ##################################################
  after_create :increment_counter_caches
  after_destroy :decrement_counter_caches

  ##################################################
  # Methods
  ##################################################
  private

  def increment_counter_caches
    event.increment(:families_count)
    family.increment(:events_count)
  end

  def decrement_counter_caches
    event.decrement(:families_count)
    family.decrement(:events_count)
  end

end

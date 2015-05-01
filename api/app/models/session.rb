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

  ##################################################
  # Methods
  ##################################################
  def self.create_for_person(person)
    session = Session.create(person: person)
    session
  end

  def is_valid?
    !is_expired
  end

  private

  def set_properties
    self.uuid           = generate_uuid
    self.last_active_at = Time.now
    self.is_logged_in   = !person.nil?
  end

  def update_properties
    self.last_active_at = Time.now
  end

  def generate_uuid
    loop do
      token = Devise.friendly_token
      break token unless self.class.unscoped.where(uuid: token).first
    end
  end

end

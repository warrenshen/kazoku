# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  first_name             :string           default(""), not null
#  last_name              :string           default(""), not null
#  image_url              :string           default(""), not null
#  is_admin               :boolean          default("f"), not null
#  family_id              :integer
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default("0"), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  created_at             :datetime
#  updated_at             :datetime
#

class Person < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  ##################################################
  # Associations
  ##################################################
  belongs_to :family
  has_many :family_events, through: :family

  ##################################################
  # Validations
  ##################################################
  validates :first_name, presence: true
  validates :last_name,  presence: true
  validates :email,      presence: true, uniqueness: true
  validates :image_url,  presence: true, uniqueness: true

  ##################################################
  # Search
  ##################################################
  include PgSearch
  pg_search_scope :search,
                  against: [[:first_name, "A"], [:last_name, "B"]],
                  using: { tsearch: { prefix: true, normalization: 2 } }

  ##################################################
  # Callbacks
  ##################################################

  ##################################################
  # Methods
  ##################################################
  private

end

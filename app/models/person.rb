# == Schema Information
#
# Table name: people
#
#  id                     :integer          not null, primary key
#  first_name             :string           default(""), not null
#  last_name              :string           default(""), not null
#  birthday               :date
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
  # Validations
  ##################################################
  validates :first_name, presence: true
  validates :last_name,  presence: true
  validates :email,      presence: true

end

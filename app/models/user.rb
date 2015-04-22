class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  ##################################################
  # Associations
  ##################################################
  belongs_to :family

  ##################################################
  # Validations
  ##################################################
  validates :first_name, presence: true
  validates :last_name,  presence: true
  validates :email,      presence: true, uniqueness: true
  validates :image_url,  presence: true, uniqueness: true

  ##################################################
  # Callbacks
  ##################################################
  before_validation :set_family_name

  ##################################################
  # Methods
  ##################################################
  def set_family_name
    self.family_name = family.name unless family_id.nil?
  end

end

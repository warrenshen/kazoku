class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :image_url
  has_one :family, serializer: FamilySerializer
end

class PersonSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :image_url, :family_name
end

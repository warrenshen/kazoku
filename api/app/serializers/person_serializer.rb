class PersonSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :image_url
end

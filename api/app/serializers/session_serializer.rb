class SessionSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_one :person, serializer: PersonSerializer
end

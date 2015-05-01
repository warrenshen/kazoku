class SessionSerializer < ActiveModel::Serializer
  attributes :id, :uuid, :last_active_at

  has_one :person, serializer: PersonSerializer
end

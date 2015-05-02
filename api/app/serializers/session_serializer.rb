class SessionSerializer < BaseSerializer
  attributes :id, :uuid, :last_active_at, :auth_email, :auth_token

  has_one :person, serializer: PersonSerializer
end

class FamilySerializer < BaseSerializer
  attributes :id, :name, :size, :events_count

  has_many :people, serializer: PersonSerializer
end

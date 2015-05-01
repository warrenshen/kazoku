class FamilySerializer < ActiveModel::Serializer
  attributes :id, :name, :size, :events_count

  has_many :people, serializer: PersonSerializer
end

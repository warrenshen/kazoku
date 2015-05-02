class PersonSerializer < BaseSerializer
  attributes :id, :first_name, :last_name, :image_url,
             :family_name, :family_id
end

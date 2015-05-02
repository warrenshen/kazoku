class PersonSerializer < BaseSerializer
  attributes :id, :first_name, :last_name, :email,
             :image_url, :family_name, :family_id
end

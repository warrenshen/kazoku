class BaseSerializer < ActiveModel::Serializer
  # Scopes json responses under given model's class name.
  def root_name
    object.class.name.underscore
  end
end

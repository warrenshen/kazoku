class Ability
  include CanCan::Ability

  def initialize(person)
    person ||= Person.new

    alias_action [:new, :create],     to: :create
    alias_action [:index, :read],     to: :read
    alias_action [:destroy, :update], to: :update

    if person.is_admin?
        can :manage, :all
    elsif person.new_record?
        can [:create, :read], :all
        cannot [:create, :read], :FamilyEvent
    else
        can [:create, :read], :all
        can :update, User, id: person.id
        cannot :read, :FamilyEvent
        can :read, :FamilyEvent, family_id: person.family.try(:id)
    end
  end

end

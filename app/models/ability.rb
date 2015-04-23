class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new

    alias_action [:new, :create],     to: :create
    alias_action [:index, :read],     to: :read
    alias_action [:destroy, :update], to: :update

    if user.is_admin?
        can :manage, :all
    elsif user.new_record?
        can [:create, :read], :all
    else
        can [:create, :read, :update], :all
    end
  end

end

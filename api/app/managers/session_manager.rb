class SessionManager

  def initialize(controller, current_session, current_person)
    @controller = controller
    @current_session = current_session
    @current_person = current_person
  end

  def current_session
    if @current_session
      @current_session.update()
      @current_session
    elsif @current_person
      Session.create_for_person(@current_person)
    end
  end

end

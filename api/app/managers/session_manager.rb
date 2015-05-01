class SessionManager

  def initialize(current_session, current_person)
    @current_session = current_session
    @current_person = current_person
  end

  def current
    if @current_session && @current_session.is_valid? && @current_person
      puts "we have a current session!"
      @current_session.update(person: @current_person)
      @current_session
    elsif @current_person
      Session.create_for_person(@current_person)
    end
  end

end

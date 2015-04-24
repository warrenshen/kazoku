class ApiError

  def initialize(object, message=nil)
    @object = object
    @message = message
  end

  def message
    @message ||= @object.errors.full_messages.to_sentence
  end

end

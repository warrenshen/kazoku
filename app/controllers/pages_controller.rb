class PagesController < ApplicationController
  skip_before_filter :authenticate_user, only: [:login, :signup]

  def home
  end

  def login
  end

  def signup
  end

end

class PersonsController < ApplicationController

  def index
    @persons = Person.all
  end

  def show
    @person = Person.find(params[:id])
  end

  def new
    @person = Person.new
  end

  def create
    if @person.save
      put @person
    end
  end

end

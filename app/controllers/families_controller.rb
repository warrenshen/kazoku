class FamiliesController < ApplicationController
  load_and_authorize_resource param_method: :family_params, only: [:create]

  def create
    if @family.save
      current_person.update(family_id: @family.id)
      render json: family_path(@family)
    else
      render json: root_path
    end
  end

  def index
    @families = Family.all
  end

  def show
    @family = Family.find(params[:id])
  end

  private

  def family_params
    params.require(:family).permit(
      :id,
      :name,
    )
  end
end

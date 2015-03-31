class ItinerariesController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @itineraries = @user.itineraries.with_all_relations
    render json: @itineraries
  end

end

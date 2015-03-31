class ItinerariesController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @itineraries = @user.itineraries.with_all_relations
    render json: @itineraries
  end

  def create
    itinerary = Itinerary.create_with_all_relations(params)
    if itinerary
      head :200
    else
      head :400
    end
  end

  def destroy
    Itinerary.delete(params[:id])
    head :200
  end

end

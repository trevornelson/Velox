class ItinerariesController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @itineraries = @user.itineraries.with_all_relations
    render json: @itineraries
  end

  def create
    # parsed_json = JSON.parse(params)
    itinerary = Itinerary.create_with_all_relations(params)
    if itinerary
      head :created
    else
      head :bad_request
    end
  end

  def destroy
    Itinerary.delete(params[:id])
    head :ok
  end

  private

  def itinerary_params
    params.permit(:user_id, :trips, :hotel)
  end

end

class MainController < ApplicationController

  def index
    @signup_user = User.new
    @session_user = User.find_by(id: session[:user_id])
  end

end

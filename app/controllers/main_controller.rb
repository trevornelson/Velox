class MainController < ApplicationController

  def index
    @signup_user = User.new()
  end

end

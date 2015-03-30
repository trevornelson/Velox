class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:session][:username])
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
    else
      session[:message] = "invalid username and/or password"
    end
    redirect root_url
  end

  def destroy
    session.delete(:user_id)
    redirect_to root_url
  end

end

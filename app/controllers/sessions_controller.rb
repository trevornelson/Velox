class SessionsController < ApplicationController

  def fetch
    @user = User.find_by(id: session[:user_id])
    if @user
      render json: {username: @user.username, email: @user.email, id: @user.id}
    else
      head :unauthorized
    end
  end

  def create
    user = User.find_by(username: params[:session][:username])
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
    else
      session[:message] = "invalid username and/or password"
    end
    redirect_to root_url
  end

  def destroy
    session.delete(:user_id)
    redirect_to root_url
  end

end

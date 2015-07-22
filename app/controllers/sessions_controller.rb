class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(*session_params.values)

    if @user
      login @user
      redirect_to @user.active_blog
    else
      flash[:errors] = ["Invalid email/password combination"]
      redirect_to new_session_url
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end

  def omniauth
    @user = User.find_or_create_by_auth_hash(auth_hash)
    login @user
    redirect_to @user.active_blog
  end

  private

  def auth_hash
    request.env['omniauth.auth']
  end

  def session_params
    params.require(:user).permit(:email, :password)
  end
end

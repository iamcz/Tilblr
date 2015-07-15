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

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end

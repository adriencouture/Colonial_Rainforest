class SessionsController < ApplicationController

  def new
  end

  def create
    # 1. We don't have to instantiate a user object in our new action because we are only logging in, not creating a new user.
    # 2. We find a user by the email typed in the email input field and assign it to the variable 'user'.
    user = User.find_by(email: params[:email])
    # 3. We check if that user exists and that it can be authenticated with the password typed in the password input field.
    if user && user.authenticate(params[:password])
    # 4. The session key has been assigned, the user is redirected to the products index page
      session[:user_id] = user.id
      redirect_to products_url, notice: "Logged in!"
    else
      render :new
    end



  end

  def destroy
    session[:user_id] = nil
    redirect_to products_url, notice: "logged out!"
  end

end

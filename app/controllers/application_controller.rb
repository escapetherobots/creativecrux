class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def s3link
  	@s3link = 'http://creativecrux.s3.amazonaws.com/'
  end
end

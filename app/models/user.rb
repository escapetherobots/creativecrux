class User < ActiveRecord::Base
	has_many :projects
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


  def make_admin!
  	self.update_attribute(:admin, true)
  end       
end

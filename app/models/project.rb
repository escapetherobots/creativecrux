class Project < ActiveRecord::Base
	belongs_to :user
	belongs_to :category
	
	has_many :project_image
	accepts_nested_attributes_for :project_image, reject_if: :all_blank, allow_destroy: false
end

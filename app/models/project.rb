class Project < ActiveRecord::Base
	belongs_to :user
	belongs_to :category
	
	has_many :project_image
	accepts_nested_attributes_for :project_image, reject_if: :all_blank, allow_destroy: true

	validates :title, :description, presence: true


	def to_param
    "#{self.id}-#{self.title}"
	end

	def getMyId
		self.title
	end
end

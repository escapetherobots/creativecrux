class ProjectImage < ActiveRecord::Base
	belongs_to :project

	validates :name, :urlpath, presence: true
end

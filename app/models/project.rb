class Project < ActiveRecord::Base
	belongs_to :user
	belongs_to :category
	
	has_many :project_image
	accepts_nested_attributes_for :project_image, reject_if: :all_blank, allow_destroy: true
	before_save :modify_slug

	validates :title, :description, presence: true
	validates_presence_of :slug

	def to_param
    "#{self.id}-#{self.slug}"
	end

	def getMyId(current_project)
		current_project.category_id
	end

	def getMySelfId
		self.g
	end

	def self.get_previous_project(current_project)
		Project.where("projects.id < ? ", current_project.id).where(:category_id => current_project.category_id).order('created_at asc').last
	end

	def self.get_next_project(current_project)
		Project.where("projects.id > ? ", current_project.id).where(:category_id => current_project.category_id).order('created_at asc').first
	end

	def modify_slug
		self.slug = slug.gsub(' ', '-').downcase
	end

end

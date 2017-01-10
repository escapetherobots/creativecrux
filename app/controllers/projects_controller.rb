class ProjectsController < ApplicationController
	before_action :find_project, only: [:show, :edit, :update, :destroy]

	def index
		@projects = Project.all.order("created_at DESC")
	end

	def show
		#runs the before_action
	end

	def new
		@project = Project.new
	end

	def create
		@project = Project.new(project_params)

		if @project.save
			redirect_to root_path #root path = projects
		else
			render 'new' #render does not refresh the page
		end
	end

	private

	def project_params
		params.require(:project).permit(:title, :description, :designer)
	end

	def find_project
		@project = Project.find(params[:id])
	end
end

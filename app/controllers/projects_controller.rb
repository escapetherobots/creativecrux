class ProjectsController < ApplicationController
	before_action :find_project, only: [:show, :edit, :update, :destroy]

	def index
		@projects = Project.all.order("created_at DESC")
	end

	def show
		#runs the before_action >> find_project
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

	def edit
		#runs before_action >> find_project


	end

	def update
		#runs before_action >> find_project
		#@project should then be available
		#but check just to make sure
		if @project.update(project_params)
			# redirect back to the project[:id]
			redirect_to project_path(@project) #@play has a project id as part of the object
		else
			render 'edit'
		end
	end

	def destroy
		#runs before_action >> find_project
		if @project.destroy
			redirect_to root_path
		else
			render 'edit'
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

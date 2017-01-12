class ProjectsController < ApplicationController
	before_action :find_project, only: [:show, :edit, :update, :destroy]

	def index
		@projects = Project.all.order("created_at DESC")
	end

	def show
		#runs the before_action >> find_project
		#@project_images = ProjectImage.where(project_id: @project.id)
	end

	def new
		@project = current_user.projects.build
		@categories = Category.all.map{ |c| [c.name, c.id] }
	end

	def create
		# the BUILD METHOD works with this relationship type
		@project = current_user.projects.build(project_params)
		@project.category_id = params[:category_id]
		

		if @project.save
			redirect_to root_path, notice: "Project Created Successfully!" #root path = projects
		else
			render 'new', notice: "Project Not Created, Please try again!" #render does not refresh the page
		end
	end

	def edit
		#runs before_action >> find_project
		@categories = Category.all.map{ |c| [c.name, c.id] }

	end

	def update
		@project.category_id = params[:category_id]
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
			redirect_to root_path, notice: "Successfully deleted project"
		else
			render 'edit'
		end
	end


	private

	def project_params
		params.require(:project).permit(:title, :description, :designer, :category_id, project_image_attributes: [:id, :name, :urlpath])
	end

	def find_project
		@project = Project.find(params[:id])
	end
end

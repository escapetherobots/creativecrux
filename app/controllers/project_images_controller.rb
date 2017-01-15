class ProjectImagesController < ApplicationController
	before_action :find_project_image, only: [:show, :edit, :update, :destroy]

	def index
		@project_images = ProjectImage.all.order("created_at DESC")
	end

	def show
		#runs the before_action >> find_project
	end

	def new
		@project_image = ProjectImage.new
		@projects = Project.all.map{ |p| [p.title, p.id] }
	end

	def create
		@projects = Project.all.map{ |p| [p.title, p.id] }
		@project_image = ProjectImage.new(project_image_params)
		@project_image.project_id = params[:project_id]

		if @project_image.save
			redirect_to root_path #root path = projects
		else
			render 'new' #render does not refresh the page
		end
	end

	def edit
		@projects = Project.all.map{ |p| [p.title, p.id] }
	end

	def update
		@project_image.project_id = params[:project_id]
		if @project_image.update(project_image_params)
			# redirect back to the project[:id]
			redirect_to project_image_path(@project_image) #@play has a project id as part of the object
		else
			render 'edit'
		end
	end

	def destroy
		#runs before_action >> find_project
		@project_image.destroy
		redirect_to project_images_path, notice: "Successfully deleted project"
		
	end

	private

	def project_image_params
		params.require(:project_image).permit(:name, :urlpath, :project_id)
	end

	def find_project_image
		@project_image = ProjectImage.find(params[:id])
	end
end

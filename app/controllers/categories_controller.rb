class CategoriesController < ApplicationController
	before_action :find_category, only: [:show, :edit, :update, :destroy]
	before_action :authenticate_user!, except: [:index, :show]

	def index
		@categories = Category.all.order("created_at DESC")
	end

	def show
		#runs the before_action
	end

	def new
		@category = Category.new()
	end

	def create
		@category = Category.new(category_params)

		if @category.save
			redirect_to categories_path, notice: "Category Created Successfully!" 
		else
			render 'new', notice: "Category Not Created, Please try again!" #render does not refresh the page
		end
	end

	def edit
		#runs before_action >>
	end

	def update
		if @category.update(category_params)
			# redirect back to the project[:id]
			redirect_to category_path(@category)
		else
			render 'edit'
		end
	end

	def destroy
		#runs before_action
		if @category.destroy
			redirect_to categories_path, notice: "Successfully deleted category"
		else
			render 'edit'
		end
	end

	private

	def category_params
		params.require(:category).permit(:name, :category_id)
	end

	def find_category
		@category = Category.find(params[:id])
	end

end

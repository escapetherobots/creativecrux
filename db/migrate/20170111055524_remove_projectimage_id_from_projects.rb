class RemoveProjectimageIdFromProjects < ActiveRecord::Migration
  def change
  	remove_column :projects, :project_image_id
  end
end

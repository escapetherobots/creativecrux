class AddProjectimageIdToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :project_image_id, :integer
  end
end

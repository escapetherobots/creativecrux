class UpdateProjectIdTypeOnProjectImagesToBelongsTo < ActiveRecord::Migration
  def change
  	change_column :project_images, :project_id, :belongs_to, index: true
  end
end

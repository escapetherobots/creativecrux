class CreateProjectImages < ActiveRecord::Migration
  def change
    create_table :project_images do |t|
      t.string :name
      t.string :urlpath

      t.timestamps null: false
    end
  end
end

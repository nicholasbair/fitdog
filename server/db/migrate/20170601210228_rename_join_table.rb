class RenameJoinTable < ActiveRecord::Migration[5.1]
  def change
    rename_table :activities_dogs, :activity_dogs
  end
end

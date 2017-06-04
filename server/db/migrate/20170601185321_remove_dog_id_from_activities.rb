class RemoveDogIdFromActivities < ActiveRecord::Migration[5.1]
  def change
    remove_column :activities, :dog_id, :integer
  end
end

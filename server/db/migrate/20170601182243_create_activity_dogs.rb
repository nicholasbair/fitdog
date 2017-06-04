class CreateActivityDogs < ActiveRecord::Migration[5.1]
  def change
    create_table :activity_dogs do |t|
      t.integer :activity_id
      t.integer :dog_id
    end
  end
end

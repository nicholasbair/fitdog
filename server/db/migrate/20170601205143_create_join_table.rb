class CreateJoinTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :activity_dogs

    create_join_table :activities, :dogs do |t|
      t.integer :activity_id
      t.integer :dog_id
    end
  end
end

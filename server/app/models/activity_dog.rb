class ActivityDog < ActiveRecord::Base
  belongs_to :activity
  belongs_to :dog
end

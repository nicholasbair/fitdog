require 'verbs'

class Activity < ActiveRecord::Base
  belongs_to :user
  has_many :activity_dogs
  has_many :dogs, through: :activity_dogs
  validates :name, :duration, presence: true

  def activity_past_tense
    Verbs::Conjugator.conjugate self.name, :tense => :past, :plurality => :singular, :aspect => :perfective
  end

  def format_participants
    result = ""
    self.dogs.each.with_index do |dog, i|
      if self.dogs.size > 1 && i == self.dogs.size - 1
        result += " and " + dog.name
      elsif i != 0
        result += ", " + dog.name
      else
        result += dog.name
      end
    end

    result
  end

  def generate_story
    "#{self.user.username.humanize} #{self.activity_past_tense} #{self.format_participants} for #{self.duration} minutes."
  end
end

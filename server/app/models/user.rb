class User < ActiveRecord::Base
  has_secure_password
  has_many :dogs
  has_many :activities
  validates :username, :email, :password_digest, presence: true
  validates :username, :email, uniqueness: true
end

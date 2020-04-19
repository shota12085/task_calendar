class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  validates :name, presence: true, uniqueness: true,length: {maximum: 20}

  has_many :group_users
  has_many :groups, through: :group_users,foreign_key: :user_id, dependent: :destroy
  has_many :events,foreign_key: :user_id, dependent: :destroy
  has_many :messages

  has_many :relationships
  has_many :followings, through: :relationships, source: :follow
  has_many :reverse_of_relationships, class_name: 'Relationship', foreign_key: 'follow_id'
  has_many :followers, through: :reverse_of_relationships, source: :user

  mount_uploader :image, ImageUploader
  mount_uploader :imageicon, BackgroundImageUploader

  def self.search(input,id)
    return nil if input == ""
    User.where(['name LIKE?', "%#{input}%"]).where.not(id: id).limit(10)
  end

  def follow(other_user)
    unless self == other_user
      self.relationships.find_or_create_by(follow_id: other_user.id)
    end
  end

  def unfollow(other_user)
    relationship = self.relationships.find_by(follow_id: other_user.id)
    relationship.destroy if relationship
  end

  def following?(other_user)
    self.followings.include?(other_user)
  end

end

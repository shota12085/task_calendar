class Group < ApplicationRecord
  has_many :group_users
  has_many :users, through: :group_users,foreign_key: :group_id, dependent: :destroy
  has_many :events,foreign_key: :group_id, dependent: :destroy
  has_many :messages,foreign_key: :group_id, dependent: :destroy


  validates :name, presence: true,length: { maximum: 20 } 
end

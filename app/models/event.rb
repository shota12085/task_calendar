class Event < ApplicationRecord
  belongs_to :group, optional: true
  belongs_to :user
  has_many :messages,foreign_key: :event_id, dependent: :destroy

  validates :title, presence: true,length: { maximum: 20 } 
end

class AddImageiconToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :imageicon, :string
  end
end

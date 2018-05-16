class AddDeatilsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :name, :string
    add_column :users, :description, :string
    add_column :users, :keyskills, :string
    add_column :users, :location, :string
    add_column :users, :latitude, :float
    add_column :users, :longitude, :float
    add_column :users, :resumeu, :string
    add_column :users, :githubu, :string
    add_column :users, :linkedinu, :string
    add_column :users, :insta, :string
    add_column :users, :twitteru, :string
  end
end

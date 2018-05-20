class ChangeResumeuToBeTextInUsers < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :resumeu, :text
  end
end

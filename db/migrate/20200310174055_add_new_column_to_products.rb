class AddNewColumnToProducts < ActiveRecord::Migration[5.2]
  def change
        add_column :products, :color, :string, null: false
  end
end

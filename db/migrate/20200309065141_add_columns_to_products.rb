class AddColumnsToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :type, :string
    add_column :products, :name, :string
    add_column :products, :description, :string
    add_column :products, :size, :string
    add_column :products, :details, :string
    add_column :products, :price, :float
  end
end

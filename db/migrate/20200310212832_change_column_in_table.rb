class ChangeColumnInTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :type
    add_column :products, :itemtype, :string, null: false
  end
end

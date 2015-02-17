class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.datetime :birth_date
      t.string :address
      t.string :contact_no
      t.string :security_question
      t.string :answer
      t.string :email_id
      t.string :password
      t.string :conf_password
      t.timestamps
    end
  end
end

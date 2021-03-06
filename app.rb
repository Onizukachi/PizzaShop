require 'sinatra/activerecord'
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'

set :database, {adapter: "sqlite3", database: "pizzashop.db"}

#создали две миграции, одна создает таблицу, а вторая наполоняет ее
#Потом за раз смогли сделать rake db:migrate и создалось две миграции для нащей молдели
#Если хотим поменять что то в таблице, простло удаляем pizzashop.db и снова rake db:migrate
class Product < ActiveRecord::Base

end

class Order < ActiveRecord::Base
	validates  :name, presence: true
	validates :phone, presence: true
	validates :adress, presence: true
end

before do
	@products = Product.all
end

get '/' do
	erb :index
end

get '/about' do
	erb :about
end

post '/cart' do
	#Получаем данные из layout где input name = "orders"
	@orders_input = params[:orders]

  	@items = parse_orders_input @orders_input

	@items.each do |item|
		item[0] = Product.find(item[0])
	end 

	erb :cart
end

post '/place_order' do
	@s = Order.create params[:order]
	erb :order_placed
  end

get '/bookings' do
	@orders = Order.order('created_at DESC')
	erb :bookings
  end


def parse_orders_input orders_input

	s1 = orders_input.split(/,/)
  
	arr = []
  
	s1.each do |x|
	  s2 = x.split(/=/)
	  s3 = s2[0].split(/_/)
  
	  id = s3[1]
	  cnt = s2[1]
  
	  arr2 = [id, cnt]
	  arr.push arr2
	end
  
	return arr
  end




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

before do
	@items = Product.all
end

get '/' do
	erb :index
end

get '/about' do
	erb :about
end

post '/cart' do
	"Hello World"
  end
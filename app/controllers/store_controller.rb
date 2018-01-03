class StoreController < ApplicationController
  def index
    @products = Stripe::Product.list
              # hash of products
    puts @products
  end
end

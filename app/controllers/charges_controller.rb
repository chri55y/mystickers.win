class ChargesController < ApplicationController


  def create
    # # Amount in cents
    # @amount = 500
    #
    # customer = Stripe::Customer.create(
    #     :email => params[:stripeEmail],
    #     :source  => params[:stripeToken]
    # )
    #
    # charge = Stripe::Charge.create(
    #     :customer    => customer.id,
    #     :amount      => @amount,
    #     :description => 'sticker pack', # can modify metadata sent with our charges
    #                                     # this appears in the payment details (not metatdata) on stripe dashboard
    #     :currency    => 'usd'
    # )

    # use stripe orders API instead
    items = []
    # format each item into a hash for stripe
    # use each instead of map to get around rails restrictions (un-permitted parameter)
    params[:cart][:items].each{ |k,v|
      items << {:type => 'sku', :parent => k, :quantity => v }
    }

    order = Stripe::Order.create(
                             :email => params[:email],
                             :currency => 'usd',
                             :items => items,
                             :shipping => {
                                 :name => params[:card][:name],
                                 :address => {
                                     :city => params[:card][:address_city],
                                     :country => params[:card][:address_country],
                                     :line1  => params[:card][:address_line1],
                                     :line2 => params[:card][:address_line2],
                                     :state => params[:card][:address_state],
                                     :postal_code => params[:card][:address_zip]
                                 }
                             }
                             )

    token = params[:id]
    order.pay(:source => token)
    # notice: we don't specify an amount anywhere: stripe will calculate this for us

    render json: {message: "Thanks for your purchase. Your order is being processed"}
                  # we'll call this message in axios .then response in Store.onToken

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to :root # new_charge_path
  end

end

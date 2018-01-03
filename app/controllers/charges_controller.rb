class ChargesController < ApplicationController

  # from https://stripe.com/docs/checkout/rails

  def create
    # Amount in cents
    @amount = 500

    customer = Stripe::Customer.create(
        :email => params[:stripeEmail],
        :source  => params[:stripeToken]
    )

    charge = Stripe::Charge.create(
        :customer    => customer.id,
        :amount      => @amount,
        :description => 'sticker pack', # can modify metadata sent with our charges
        :currency    => 'usd'
    )

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to :root # new_charge_path
  end

end

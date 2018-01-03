Rails.configuration.stripe = {
    :publishable_key => ENV['STRIPE_PUBLISHABLE_KEY'],
    :secret_key      => ENV['STRIPE_SECRET_KEY']
}                           # add STRIPE_ prefix for differentiation
                            # also added these to ~/.bash_profile

Stripe.api_key = Rails.configuration.stripe[:secret_key]
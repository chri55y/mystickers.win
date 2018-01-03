Rails.configuration.stripe = {
    :publishable_key => ENV['STRIPE_PUBLISHABLE_KEY'],
    :secret_key      => ENV['STRIPE_SECRET_KEY']
}                           # add STRIPE_ prefix for differentiation
                            # also added these to ~/.bash_profile
                            #
                            # error fix: for invalid key
                            # run command source ~/.bash_profile
                            # then re-start rails server (same terminal?)

Stripe.api_key = Rails.configuration.stripe[:secret_key]
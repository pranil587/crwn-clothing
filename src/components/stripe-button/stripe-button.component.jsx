import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KYZSmLizRg8XixBHmityoWdu12mEPyRY6vRZq1vyurcc807LQXyba9q72JpJX3B9XlIaELwxk6UrLGO6ZX4BfF700ZKhgxIXz";

    const onToken = token=>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
      <StripeCheckout
      lavel='Pay Now'
      name='CRWM Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      ></StripeCheckout>
    );
};
export default StripeCheckoutButton;

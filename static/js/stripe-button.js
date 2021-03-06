$(document).ready(function(){

  $.getScript("https://checkout.stripe.com/checkout.js", function()
  {
    console.log("stripe checkout script ready");

    window.key="SAMPLESTRIPEPUBLISHABLEKEY";

    $.ajax({ url: '/credentials/publishable_key', async: false, success: function(data) 
      { 
        window.key=data;
      } 
    });

    var handler = StripeCheckout.configure({
      key: window.key,
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: function(token) {
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
    $("#stripeToken").val(token.id);
    $("#stripeEmail").val(token.email);
    $("#stripe-form").submit();
      }
    });

    $('#stripe-button').on('click', function (e) {
    // Open Checkout with further options
    handler.open({
      name: 'ARM New Brunswick',
      description: 'armnewbrunswick.org',
      amount: 100,
      panelLabel: 'Donate',
      zipCode: true,
      allowRememberMe: false,
      bitcoin:true
      });
    e.preventDefault();
    });

    // Close Checkout on page navigation
    $(window).on('popstate', function () {
      console.log("closed");
      handler.close();
    });

  });

});
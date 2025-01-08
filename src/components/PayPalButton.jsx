import React, { useEffect } from 'react'

const PayPalButton = ({ amount }) => {
  useEffect(() => {
    if (window.paypal) {
      window.paypal
        .Buttons({
          // Create Order
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount, // Specify the amount here
                  },
                },
              ],
            })
          },

          // On Approval
          onApprove: async (data, actions) => {
            try {
              // Capture the payment on the frontend
              const orderDetails = await actions.order.capture()
              console.log('Captured order details:', orderDetails)

              // Check if orderId exists and log it
              console.log('Order ID:', data.orderID)

              // Send capture data to the backend
              const response = await fetch(
                'http://localhost:3000/api/v1/paypal/payment/capture-payment',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ orderId: data.orderID }), // Send the orderId to the backend
                }
              )

              if (!response.ok) {
                throw new Error('Failed to capture payment on backend')
              }

              const captureData = await response.json()
              console.log('Capture Response:', captureData)

              if (captureData.status === 'COMPLETED') {
                alert('Payment successful!')
              } else {
                alert('Payment not completed. Please try again.')
              }
            } catch (error) {
              console.error('Error during payment:', error)
              alert('An error occurred while processing your payment.')
            }
          },

          // Handle Errors
          onError: (err) => {
            console.error('PayPal Button error:', err)
            alert('An error occurred with PayPal. Please try again later.')
          },
        })
        .render('#paypal-button-container')
    } else {
      console.error('PayPal SDK not loaded.')
      alert('Unable to load PayPal. Please refresh the page.')
    }
  }, [amount])

  return <div id="paypal-button-container"></div>
}

export default PayPalButton

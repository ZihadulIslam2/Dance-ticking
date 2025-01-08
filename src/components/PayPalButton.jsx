import React, { useEffect } from 'react'

const PayPalButton = ({ amount }) => {
  useEffect(() => {
    if (window.paypal) {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                  },
                },
              ],
            })
          },

          onApprove: async (data, actions) => {
            try {
              const orderDetails = await actions.order.capture()
              console.log('Captured order details:', orderDetails)

              // Send capture data to the backend API
              const response = await fetch(
                'http://localhost:3000/api/v1/paypal/payment/capture-payment', // Ensure this matches the backend URL
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ orderId: data.orderID }),
                }
              )

              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
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

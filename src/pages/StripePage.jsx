import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js'
import { Button } from '../components/Button'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const StripeCheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (!stripe || !elements) {
      setMessage('Stripe has not loaded yet. Please try again later.')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('http://localhost:3000/api/payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 100, currency: 'usd' }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Failed to create PaymentIntent')
      }

      const { client_secret } = data.paymentIntent
      console.log('Received client secret:', client_secret)

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })

      if (result.error) {
        setMessage(`Payment failed: ${result.error.message}`)
      } else if (result.paymentIntent.status === 'succeeded') {
        setMessage('Payment Successful!')
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`)
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="card"
          className="block text-sm font-medium text-gray-700"
        >
          Card Details
        </label>
        <div className="mt-2 p-2 border rounded-md shadow-sm">
          <CardElement id="card" className="p-2" />
        </div>
      </div>
      <Button type="submit" disabled={loading || !stripe || !elements}>
        {loading ? 'Processing...' : 'Pay $1.00'}
      </Button>
      {message && <p className="text-sm text-red-500 mt-2">{message}</p>}
    </form>
  )
}

const Checkout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Stripe Checkout</h2>
        <Elements stripe={stripePromise}>
          <StripeCheckoutForm />
        </Elements>
      </div>
    </div>
  )
}

export default Checkout

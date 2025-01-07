import { useState } from 'react'
import { Button } from '../components/button'

const Checkout = ({ totalAmount }) => {
  const [loading, setLoading] = useState(false)

  const handleStripePayment = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:3000/api/payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalAmount,
          currency: 'usd',
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        console.error('Payment URL not found!')
      }
    } catch (error) {
      console.error('Error processing payment:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Checkout</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="123-456-7890"
              required
            />
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <Button>Pay With PayPal</Button>
            <Button
              variant="outline"
              onClick={handleStripePayment}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Pay With Stripe'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout

// import { useState } from 'react'
// import { Button } from '../components/button'

// const Checkout = ({ totalAmount}) => {
//   // Total amount
//   // const [totalAmount, setTotalAmount] = useState(100)
//   const [loading, setLoading] = useState(false)

//   // Handle Stripe payment
//   const handleStripePayment = async () => {
//     try {
//       setLoading(true)

//       // Fetch payment intent
//       const response = await fetch('http://localhost:3000/api/payment-intent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: totalAmount,
//           currency: 'usd',
//         }),
//       })

//       // Check response status
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`)
//       }

//       const data = await response.json()

//       // Redirect if payment URL exists
//       if (data.url) {
//         window.location.href = data.url
//       } else {
//         console.error('Payment URL not found!')
//       }
//     } catch (error) {
//       console.error('Error processing payment:', error)
//     } finally {
//       // Reset loading state
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Checkout</h2>
//         <form className="space-y-4">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               placeholder="you@example.com"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="phone"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               placeholder="123-456-7890"
//               required
//             />
//           </div>
//           <div className="flex flex-col space-y-2 mt-4">
//             {/* Placeholder for PayPal Button */}
//             <Button>Pay With PayPal</Button>
//             {/* Stripe Payment Button */}
//             <Button
//               variant="outline"
//               onClick={handleStripePayment}
//               disabled={loading}
//             >
//               {loading ? 'Processing...' : 'Pay With Stripe'}
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Checkout

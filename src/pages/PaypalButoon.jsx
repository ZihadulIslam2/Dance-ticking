import { useState } from 'react'
import PayPalButton from '../components/PayPalButton'

const PaypalButton = () => {
  const [amount, setAmount] = useState('300.00') // Example amount

  return (
    <div>
      <h1>PayPal Button</h1>
      <div>
        <PayPalButton amount={amount} />
      </div>
    </div>
  )
}

export default PaypalButton

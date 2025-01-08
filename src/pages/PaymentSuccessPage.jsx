import { useNavigate } from 'react-router-dom'

const PaymentSuccessPage = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold text-green-600">
          Payment Successful!
        </h1>
        <p className="mt-4 text-gray-700">
          Your payment was successfully processed. Thank you for your purchase.
        </p>
        <button
          onClick={handleGoHome}
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  )
}

export default PaymentSuccessPage

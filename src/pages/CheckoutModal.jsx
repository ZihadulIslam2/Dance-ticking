import Checkout from '../pages/Checkout' // Adjust the path based on your folder structure.
import Modal from '../components/shared/dialog'

const CheckoutModal = ({ isOpen, onClose, totalAmount }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Checkout totalAmount={totalAmount} />
    </Modal>
  )
}

export default CheckoutModal

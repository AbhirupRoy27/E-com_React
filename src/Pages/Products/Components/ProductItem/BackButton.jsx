import { ArrowBigLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function BackButton() {
  const navigate = useNavigate()
  return (
    <div>
      <button
        className="hidden lg:flex items-center sm:px-2 sm:py-4 font-semibold gap-2"
        onClick={() => navigate('/Products')}
      >
        <ArrowBigLeft size={30} />
        Go Back
      </button>
    </div>
  )
}

export default BackButton

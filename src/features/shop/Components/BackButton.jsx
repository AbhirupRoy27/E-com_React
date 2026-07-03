import { ArrowBigLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function BackButton({ label, route }) {
  const navigate = useNavigate()
  return (
    <button
      className="hidden sm:flex items-center sm:px-2 sm:py-4 font-semibold gap-2 text-2xl"
      onClick={() => navigate(route || '/')}
    >
      <ArrowBigLeft size={30} />
      {label || 'Go Back'}
    </button>
  )
}

export default BackButton

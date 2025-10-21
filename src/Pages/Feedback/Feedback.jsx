import LeftCompo from './Componets/LeftCompo'
import RightCompo from './Componets/RightCompo'

function Feedback() {
  return (
    <div className="flex flex-col md:flex-row">
      <LeftCompo />
      <RightCompo />
    </div>
  )
}

export default Feedback

import { useNavigate } from 'react-router-dom'

function AuthTopBar() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold tracking-widest text-gray-50/80">
        NextGen
      </h1>
      <div className="flex gap-2">
        <button className="py-3 px-5 border" onClick={() => navigate('login')}>
          Login
        </button>
        <button
          className="py-3 px-5 bg-gray-100 text-gray-950"
          onClick={() => navigate('signup')}
        >
          Signup
        </button>
      </div>
    </div>
  )
}

export default AuthTopBar

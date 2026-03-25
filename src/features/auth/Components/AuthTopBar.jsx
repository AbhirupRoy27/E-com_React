import { useNavigate } from 'react-router-dom'

function AuthTopBar() {
  const navigate = useNavigate()

  return (
    <header className="flex justify-between items-center w-full">
      <h1 
        className="text-3xl font-bold tracking-widest text-gray-50/80 hover:text-white cursor-pointer transition-colors duration-300"
        onClick={() => navigate('/')}
        title="Go to Home"
      >
        StarProMart
      </h1>
      <nav className="flex gap-3">
        <button 
          className="py-3 px-5 border border-gray-500/50 rounded-lg text-gray-200 hover:bg-white/10 hover:border-gray-400 transition-all duration-200 active:scale-[0.98]" 
          onClick={() => navigate('login')}
        >
          Login
        </button>
        <button
          className="py-3 px-5 bg-gray-100 text-gray-950 font-semibold rounded-lg hover:bg-white hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
          onClick={() => navigate('signup')}
        >
          Signup
        </button>
      </nav>
    </header>
  )
}

export default AuthTopBar

import { useNavigate } from 'react-router-dom'
import { handleLogin } from '../utils/handleLogin'
import { handleAuthInputs } from '../utils/handleAuthInputs'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function LoginForm() {
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false)
  const [cred, setCred] = useState({
    email: '',
    pass: '',
  })
  const { isLogin, setIsLogin } = useAuth()

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <form
        className="bg-gray-700 px-3 sm:px-10 py-4 w-full sm:w-fit"
        onSubmit={(e) => handleLogin(e, navigate, cred, isLogin, setIsLogin)}
      >
        <div className="flex flex-col items-center gap-2 pb-5 border-b-1 border-white/30">
          <h2 className="text-2xl pb-3 mb-5 border-b-1 border-white/30">
            Login Form
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center w-full justify-between">
            <label className="tracking-widest">Email</label>
            <input
              onChange={(e) => handleAuthInputs(e, setCred)}
              placeholder="Enter Email"
              className="bg-white/10 py-2 px-2 w-full sm:w-auto sm:min-w-[300px] focus:outline-0 focus:bg-white/30"
              name="email"
              maxLength={30}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center w-full justify-between">
            <label className="tracking-widest">Password</label>
            <input
              onChange={(e) => handleAuthInputs(e, setCred)}
              placeholder="Password"
              className="bg-white/10 py-2 px-2 w-full sm:w-auto sm:min-w-[300px] focus:outline-0 focus:bg-white/30"
              type={isChecked ? 'text' : 'password'}
              name="pass"
            />
          </div>
          <div className="flex w-full justify-end gap-1 py-2">
            <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
            <label className="text-sm">{isChecked ? 'Hide' : 'Show'}</label>
          </div>
          <button
            className="bg-sky-900 py-2 px-5 w-full font-semibold"
            type="submit"
          >
            Login
          </button>
        </div>
        <div
          className="flex justify-center cursor-pointer"
          onClick={() => alert('Contect admin')}
        >
          <h4 className="py-2 text-gray-200 font-bold tracking-widest">
            Forgot Password
          </h4>
        </div>
      </form>
    </div>
  )
}

export default LoginForm

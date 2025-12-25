import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { handleLogin, handleInput } from '../../../Utils/Account/handleClick'
import { useAuth } from '../../../Contexts/Auth/AuthContext'

function Login() {
  const navigate = useNavigate()
  const [cred, setCred] = useState({
    email: '',
    pass: '',
  })
  const { isLogin, setIsLogin } = useAuth()
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className="w-screen min-w-[354px] h-screen bg-gray-900 px-2 sm:px-6 md:px-10 xl:px-30 pt-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-widest text-gray-50/80">
          NextGen
        </h1>
        <div className="flex gap-2">
          <button className="py-3 px-5 border">Login</button>
          <button className="py-3 px-5 bg-gray-100 text-gray-950">
            Signup
          </button>
        </div>
      </div>
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
                onChange={(e) => handleInput(e, setCred)}
                placeholder="Enter Email"
                className="bg-white/10 py-2 px-2 w-full sm:w-auto sm:min-w-[300px] focus:outline-0 focus:bg-white/30"
                name="email"
                maxLength={30}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center w-full justify-between">
              <label className="tracking-widest">Password</label>
              <input
                onChange={(e) => handleInput(e, setCred)}
                placeholder="Password"
                className="bg-white/10 py-2 px-2 w-full sm:w-auto sm:min-w-[300px] focus:outline-0 focus:bg-white/30"
                type={isChecked ? 'text' : 'password'}
                name="pass"
              />
            </div>
            <div className="flex w-full justify-end gap-1 py-2">
              <input
                type="checkbox"
                onChange={() => setIsChecked(!isChecked)}
              />
              <label className="text-sm">{isChecked ? 'Hide' : 'Show'}</label>
            </div>
            <button
              className="bg-sky-900 py-2 px-5 w-full font-semibold"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="flex justify-center">
            <h4 className="py-2 text-red-600 font-bold tracking-widest">
              Forgot Password
            </h4>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

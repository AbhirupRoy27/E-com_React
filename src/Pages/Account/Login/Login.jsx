import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { handleLogin, handleEmail } from '../utils/handleClick'
import Logo from '../utils/Logo'

function Login() {
  const navigate = useNavigate()
  const [cred, setCred] = useState({
    email: '',
    pass: '',
  })

  return (
    <div className="bg-gradient-to-br from-slate-300 to-slate-50 h-[100vh] flex justify-center items-center flex-col">
      <Logo />
      <form
        className="bg-white rounded-md w-[95vw] md:w-max md:p-4"
        onSubmit={(e) => handleLogin(e, navigate, cred)}
      >
        <p className="text-center py-4 text-3xl font-bold bg-gradient-to-br from-slate-500 to-slate-900 bg-clip-text text-transparent tracking-wide">
          Login
        </p>
        <div className="p-2 md:p-4 flex flex-col gap-2 items-center justify-between">
          <div className="flex gap-2 w-full items-center justify-between p-1 md:p-0">
            <label htmlFor="name" className="font-semibold tracking-wide">
              Email
            </label>
            <input
              id="name"
              placeholder="Enter Email"
              className="w-[270px] p-2 bg-slate-100 rounded tracking-widest"
              maxLength={23}
              type="email"
              value={cred.email}
              onChange={(e) => handleEmail(e, setCred)}
              name="email"
            />
          </div>
          <div className="flex gap-2 min-w-[310px] md:min-w-[380px] items-center justify-between">
            <label htmlFor="Password" className="font-semibold ">
              Password
            </label>
            <input
              id="Password"
              placeholder="Enter Password"
              className="w-[270px] p-2 bg-slate-100 rounded tracking-wide"
              minLength={6}
              type="password"
              value={cred.pass}
              onChange={(e) => handleEmail(e, setCred)}
              name="pass"
            />
          </div>
        </div>
        <div className="py-2 flex justify-center">
          <button
            className="bg-[#febd68] p-2 rounded active:scale-103 font-bold min-w-[100px] tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="flex justify-center py-2 gap-1">
          <p className="text-sm">New user</p>
          <p
            className="text-sm font-bold text-blue-800"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login

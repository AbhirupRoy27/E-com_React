import { useNavigate } from 'react-router-dom'
import { handleSignup, handleEmail } from '../utils/handleClick'
import { useState } from 'react'

function Signup() {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [cred, setCred] = useState({
    email: '',
    pass: '',
    rePass: '',
  })

  return (
    <div className="bg-gradient-to-br from-slate-300 to-slate-50 h-[100vh] flex justify-center items-center">
      <form
        className="bg-white rounded w-[95vw] md:w-max md:p-4"
        onSubmit={(e) => handleSignup(e, navigate, cred)}
      >
        <p className="text-center py-4 text-2xl tracking-wide">Sign Up</p>
        <div className="p-2 md:p-4 flex flex-col gap-2 items-center justify-between">
          <div className="flex gap-2 w-full items-center justify-between p-1 md:p-0">
            <label>Email</label>
            <input
              placeholder="Enter Email"
              className="w-[270px] p-2 bg-slate-100 rounded tracking-wide"
              type="email"
              value={cred.email}
              onChange={(e) => handleEmail(e, setCred)}
              name="email"
            />
          </div>
          <div className="flex gap-2 w-full min-w-[310px] md:min-w-[380px] items-center justify-between">
            <label>Password</label>
            <input
              placeholder="Enter Password"
              className="w-[270px] p-2 bg-slate-100 rounded tracking-wide"
              type={showPass ? 'text' : 'password'}
              value={cred.pass}
              onChange={(e) => handleEmail(e, setCred)}
              name="pass"
              minLength={6}
            />
          </div>
          <div className="flex gap-2 w-full min-w-[310px] md:min-w-[380px] items-center justify-between">
            <label>Password</label>
            <input
              placeholder="Enter Password Again"
              className="w-[270px] p-2 bg-slate-100 rounded tracking-wide"
              type={showPass ? 'text' : 'password'}
              value={cred.rePass}
              onChange={(e) => handleEmail(e, setCred)}
              name="rePass"
              minLength={6}
            />
          </div>
          {cred.pass.length > 0 || cred.rePass.length > 0 ? (
            <div className="flex justify-end w-full mr-5 text-sm p-1 tracking-widest ">
              <p onClick={() => setShowPass(!showPass)}>
                {showPass ? <b className="text-red-600">Hide</b> : 'Show'}
              </p>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="py-2 flex justify-center">
          <button
            className="bg-[#febd68] p-2 rounded active:scale-103 font-bold min-w-[100px]"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div className="flex justify-center py-2 gap-1">
          <p className="text-sm">Already an User</p>
          <p
            className="text-sm font-bold text-blue-800"
            onClick={() => navigate('/login')}
          >
            Login
          </p>
        </div>
      </form>
    </div>
  )
}

export default Signup

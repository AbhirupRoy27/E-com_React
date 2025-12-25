import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleSignup } from '../utils/handleSignup'
import { handleAuthInputs } from '../utils/handleAuthInputs'

function RegisterForm() {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [cred, setCred] = useState({
    email: '',
    pass: '',
    rePass: '',
  })

  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        className="bg-gray-700 px-3 sm:px-10 py-6 w-full sm:w-fit"
        onSubmit={(e) => handleSignup(e, navigate, cred)}
      >
        <div className="flex flex-col items-center gap-2 pb-5 border-b-1 border-white/30">
          <h2 className="text-2xl w-[70%] pb-3 mb-5 border-b-1 border-white/30 text-center">
            Register Form
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
              type={showPass ? 'text' : 'password'}
              name="pass"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center w-full justify-between">
            <label className="tracking-widest">Confirm Password</label>
            <input
              onChange={(e) => handleAuthInputs(e, setCred)}
              placeholder="Password"
              className="bg-white/10 py-2 px-2 w-full sm:w-auto sm:min-w-[300px] focus:outline-0 focus:bg-white/30"
              type={showPass ? 'text' : 'password'}
              name="rePass"
            />
          </div>
          <div className="flex w-full justify-end gap-1 py-2">
            <input type="checkbox" onChange={() => setShowPass(!showPass)} />
            <label className="text-sm">{showPass ? 'Hide' : 'Show'}</label>
          </div>
          <button
            className="bg-sky-900 hover:bg-sky-800 transition duration-300 active:scale-95 py-2 px-5 w-full font-semibold"
            type="submit"
          >
            Register
          </button>
        </div>
        <div
          className="flex justify-center cursor-pointer"
          onClick={() => alert('Contect admin')}
        >
          <h4 className="py-2 text-gray-300 hover:scale-105 transition duration-300 font-bold tracking-widest">
            Forgot Password
          </h4>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm

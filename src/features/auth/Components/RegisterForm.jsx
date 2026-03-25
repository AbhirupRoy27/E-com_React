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
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="bg-white px-8 py-10 w-full max-w-[440px] rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        onSubmit={(e) => handleSignup(e, navigate, cred)}
      >
        <div className="flex flex-col gap-6">
          <div className="text-center mb-2">
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Create an account
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Enter your details to get started.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              onChange={(e) => handleAuthInputs(e, setCred)}
              placeholder="Enter your email"
              className="px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all sm:text-sm"
              name="email"
              maxLength={30}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="pass" className="text-sm font-medium text-gray-700">Password</label>
            <input
              id="pass"
              onChange={(e) => handleAuthInputs(e, setCred)}
              placeholder="••••••••"
              className="px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all sm:text-sm"
              type={showPass ? 'text' : 'password'}
              name="pass"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="rePass" className="text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              id="rePass"
              onChange={(e) => handleAuthInputs(e, setCred)}
              placeholder="••••••••"
              className="px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all sm:text-sm"
              type={showPass ? 'text' : 'password'}
              name="rePass"
              required
            />
          </div>

          <div className="flex items-center gap-2 -mt-1">
            <input
              type="checkbox"
              id="show-pass"
              className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
              onChange={() => setShowPass(!showPass)}
            />
            <label htmlFor="show-pass" className="text-sm text-gray-600 select-none cursor-pointer">
              Show password
            </label>
          </div>

          <button
            className="w-full mt-2 bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 active:scale-[0.99]"
            type="submit"
          >
            Register
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          Already have an account?{' '}
          <button
            type="button"
            className="font-medium text-gray-900 hover:underline"
            onClick={() => navigate('/auth/login')}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  )
}

export default RegisterForm

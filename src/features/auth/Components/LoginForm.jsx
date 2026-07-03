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
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="bg-white px-8 py-10 w-full max-w-[440px] rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        onSubmit={(e) => handleLogin(e, navigate, cred, isLogin, setIsLogin)}
      >
        <div className="flex flex-col gap-6">
          <div className="text-center mb-2">
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Welcome back
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Please enter your details to sign in.
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
              type={isChecked ? 'text' : 'password'}
              name="pass"
              required
            />
          </div>

          <div className="flex items-center justify-between -mt-1">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="show-pass"
                className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                onChange={() => setIsChecked(!isChecked)}
              />
              <label htmlFor="show-pass" className="text-sm text-gray-600 select-none cursor-pointer">
                Show password
              </label>
            </div>

            <button
              type="button"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => navigate('/auth/reset-pass')}
            >
              Forgot password?
            </button>
          </div>

          <button
            className="w-full mt-2 bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 active:scale-[0.99]"
            type="submit"
          >
            Sign in
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          Don't have an account?{' '}
          <button
            type="button"
            className="font-medium text-gray-900 hover:underline"
            onClick={() => navigate('/auth/signup')}
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  )
}

export default LoginForm

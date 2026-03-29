import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPass() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleResetSubmit = (e) => {
    e.preventDefault();
    // Handle password reset
    alert(`Reset link sent to ${email}`);
    navigate("/auth/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="bg-white px-8 py-10 w-full max-w-[440px] rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        onSubmit={handleResetSubmit}
      >
        <div className="flex flex-col gap-6">
          <div className="text-center mb-2">
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Reset your password
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Enter your email address to receive a password reset code.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all sm:text-sm"
              required
            />
          </div>

          <button
            className="w-full mt-2 bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 active:scale-[0.99]"
            type="submit"
          >
            Send Reset Code
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          Remember your password?{" "}
          <button
            type="button"
            className="font-medium text-gray-900 hover:underline"
            onClick={() => navigate("/auth/login")}
          >
            Back to login
          </button>
        </p>
      </form>
    </div>
  );
}

export default ResetPass;

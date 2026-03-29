import { ArrowLeft } from "lucide-react";
import { useState } from "react";

function ResetPass() {
  const [email, setEmail] = useState("");
  return (
    <div className="p-2 sm:px-6 lg:px-10 xl:px-30 h-screen">
      <button className="flex gap-2 bg-white/20 py-2 px-3 rounded-md text-sm font-medium text-gray-300 hover:bg-white/30 transition-colors mt-4">
        <ArrowLeft />
        Go Back
      </button>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
          alt="Reset Password"
          className="w-16 h-16 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-black mt-6">Reset Password</h1>
        <p className="text-gray-400 mt-2">
          Enter your email address to receive a password reset link.
        </p>
        <form
          className="mt-6 max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission
            alert(`Reset link sent to ${email}`);
          }}
        >
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-800/50 transition-colors mb-4"
            placeholder="Enter your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="w-full mt-2 bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 active:scale-[0.99]"
            disabled={!email.length}
            type="submit"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPass;

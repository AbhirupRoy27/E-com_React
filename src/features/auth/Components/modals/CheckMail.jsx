import { MailCheck, Loader } from "lucide-react";

const CheckMail = ({ isOpen, onClose, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="bg-white px-8 py-10 w-full max-w-[440px] rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="flex flex-col gap-6 text-center">
          <div className="flex flex-col items-center gap-4">
            {isLoading ? (
              <Loader className="animate-spin" color="black" size={60} />
            ) : (
              <MailCheck color="black" size={60} />
            )}
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
              {isLoading ? "Sending reset link..." : "Check your email"}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              {isLoading
                ? "Please wait while we send you a password reset link."
                : "We've sent a password reset link to your email address."}
            </p>
          </div>

          <button
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
            onClick={onClose}
            disabled={isLoading}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckMail;

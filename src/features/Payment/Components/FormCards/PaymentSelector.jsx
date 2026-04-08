import { useState } from "react";
import { useBuy } from "../../Context/BuyContext";

const PAYMENT_OPTIONS = [
  { label: "Pay With UPI", value: "UPI" },
  { label: "Pay With Credit/Debit Card", value: "Credit" },
  { label: "Pay With NG Pay Later", value: "Pay Later" },
];

function PaymentSelector() {
  const [paymentMode, setPaymentMode] = useState("");
  const { setIsDisabled } = useBuy();

  const hasSelection = paymentMode.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasSelection) setIsDisabled(true);
  };

  const handleReset = () => {
    setPaymentMode("");
    setIsDisabled(false);
  };

  return (
    <div className="text-black pt-3">
      <form
        className="border border-black/30 p-4 rounded-lg"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        {PAYMENT_OPTIONS.map((option) => (
          <div
            key={option.value}
            className="flex gap-3 items-center border-b border-black/30 py-3"
          >
            <label>{option.label}</label>
            <input
              type="radio"
              value={option.value}
              name="paymentMode"
              checked={paymentMode === option.value}
              onChange={() => setPaymentMode(option.value)}
            />
          </div>
        ))}

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={!hasSelection}
            className={`${
              hasSelection ? "bg-amber-300" : "bg-amber-300/60"
            } py-2 px-5 rounded-full mt-3 font-semibold tracking-wider`}
          >
            Continue
          </button>
          <button
            type="reset"
            className="bg-gray-700 text-white py-2 px-5 rounded-full mt-3 font-semibold tracking-wider"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentSelector;

import { CircleUser } from 'lucide-react'

function NavbarPayment() {
  return (
    <div className="bg-gray-900 flex justify-between items-center px-2 sm:px-6 py-3">
      <p className="text-3xl lg:text-4xl text-gray-300 font-semibold text-shadow-lg text-shadow-white/30 tracking-wide font-mono">
        NG
      </p>
      <p className="text-2xl sm:text-3xl lg:text-4xl text-white tracking-widest">
        Checkout
      </p>
      <div className="w-[53px] h-[53px] bg-slate-100 rounded-full flex justify-center items-center">
        <CircleUser color="black" size={50} />
      </div>
    </div>
  )
}

export default NavbarPayment

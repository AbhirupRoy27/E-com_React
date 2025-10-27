import React from 'react'

function Footer() {
  return (
    <div className="bg-black min-h-[20vh] min-w-[350px] sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px] p-6 sm:p-10 overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between">
        <h1
          className="text-3xl sm:text-5xl text-white mb-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          NextGen
        </h1>
        <div className="flex text-white gap-10">
          <div>
            <h3 className="text-xl font-bold mb-2">Connect</h3>
            <a
              href="https://www.instagram.com/ig__abhirup/"
              className="hover:text-white active:text-white text-white/50 cursor-pointer"
            >
              Instragram
            </a>
            <p className="hover:text-white active:text-white text-white/50 cursor-pointer">
              Twitter{'(X)'}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 hover:text-white">Contact</h3>
            <a
              href="mailto:rabhirup605@gamil.com"
              className="hover:text-white text-white/50 cursor-pointer"
            >
              Email
            </a>
            {/* <p className="hover:text-white text-white/50 cursor-pointer">
              
            </p> */}
            <p className="hover:text-white text-white/50 cursor-pointer">
              +91 9851253334
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white flex flex-col sm:flex-row justify-between text-gray-100 pt-2 mt-4 min-w-[350px]">
        <p className="tracking-wider text-slate-100 text-sm text-center sm:text-start">
          copyright by Abhirup Roy
        </p>
        <div className="flex gap-2 sm:gap-4 justify-center">
          <p className="text-sm">Terms and Service</p>
          <p className="text-sm">Privecy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

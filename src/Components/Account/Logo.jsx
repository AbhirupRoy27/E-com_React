import React from 'react'

function Logo() {
  return (
    <div className="mb-8 flex flex-col items-center w-full gap-1">
      <p className="text-3xl text-slate-700 font-bold tracking-wide">
        Welocome to
      </p>
      <div className="flex">
        <p className="text-5xl font-bold tracking-wide mr-1">
          <b className="text-6xl bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent ">
            N
          </b>
          extGen
        </p>
        <p className="text-5xl font-bold tracking-wide">
          <b className="text-6xl bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent ml-1">
            S
          </b>
          tore
        </p>
      </div>
    </div>
  )
}

export default Logo

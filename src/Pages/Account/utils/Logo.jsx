import React from 'react'

function Logo() {
  return (
    <div className="mb-5 flex flex-col items-center w-full gap-2">
      <p className="text-3xl font-bold tracking-wide">Welocome to</p>
      <p className="text-5xl font-bold tracking-wide">
        <b className="text-6xl bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent ml-1">
          N
        </b>
        extGen
        <b className="text-6xl bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent ml-1">
          S
        </b>
        tore
      </p>
    </div>
  )
}

export default Logo

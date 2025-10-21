import React, { useState } from 'react'
import { handleSubmit, handleInput } from '../Utils/Formhandler'

function LeftCompo() {
  const [feedback, setFeedBack] = useState({
    Feedback: '',
    Email: '',
  })

  return (
    <div className="md:w-[70%] overflow-hidden">
      <div className="p-[2vw] flex flex-col gap-[1.2vw] items-center justify-center bg-slate-50 min-h-[50vh] md:min-h-[85vh] max-w-[100vw] ">
        <p className=" relative top-0 text-[clamp(0.7rem,1.5vw,0.9rem)] bg-sky-100 py-2 px-3 rounded text-gray-700 w-max text-center mb-2 opacity-60">
          Currenty Under Development
        </p>
        <h1 className="text-[clamp(1.5rem,3vw,2rem)] font-bold">Feedback</h1>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[clamp(1rem,1.5vw,1rem)] text-gray-700 max-w-[80vw] text-center mb-2">
            I’d love your feedback. Tell me what you think about the App!
          </p>
        </div>
        <div className="max-w-[80vw] w-[460px]">
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => handleSubmit(e, feedback, setFeedBack)}
          >
            <textarea
              placeholder="Enter FeedBack"
              className="p-2 w-full bg-slate-100 focus:bg-slate-200 rounded focus:border border-black tracking-wide focus:outline-none"
              value={feedback.Feedback}
              rows="5"
              onChange={(e) => handleInput(e, setFeedBack)}
              name="Feedback"
            />
            <input
              placeholder="Enter Email"
              className="p-2 bg-slate-100 focus:bg-slate-200 focus:outline-none focus:border rounded"
              value={feedback.Email}
              name="Email"
              onChange={(e) => handleInput(e, setFeedBack)}
              type="email"
            />
            <button
              className="bg-yellow-400 text-black px-[1%] py-[2%] rounded-xl text-[1rem] hover:bg-yellow-500 transition-colors mt-2"
              type="submit"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LeftCompo

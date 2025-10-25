import React, { useState } from 'react'
import { handleSubmit, handleInput } from '../Utils/Formhandler'

function LeftCompo() {
  const [feedback, setFeedBack] = useState({
    Feedback: '',
  })

  return (
    <div className="w-full overflow-hidden ">
      <div className="p-[2vw] flex flex-col gap-4 items-center justify-center bg-slate-50 w-full min-h-[85vh] min-w-[576px] sm:min-w-[1100px]">
        <p className=" relative top-0 bg-sky-100 py-2 px-3 rounded text-gray-700 w-max text-center mb-2 opacity-60">
          Currenty Under Development
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold">Feedback</h1>
        <div className="flex flex-col justify-center items-center">
          <p className="text-md sm:text-lg text-gray-700 px-4 text-center mb-2">
            I’d love your feedback. Tell me what you think about the App!
          </p>
        </div>
        <div className="max-w-[80vw] min-w-[300px] w-[90vw] sm:w-[550px]">
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => handleSubmit(e, feedback, setFeedBack)}
          >
            <textarea
              placeholder="Enter FeedBack"
              className="p-2 w-full bg-slate-100 w-full sm:w-auto focus:bg-slate-200 rounded focus:border border-black tracking-wide focus:outline-none"
              value={feedback.Feedback}
              rows="7"
              onChange={(e) => handleInput(e, setFeedBack)}
              name="Feedback"
            />
            <button
              className="bg-yellow-400 text-black px-[1%] py-[2%] rounded-xl text-[1rem] hover:bg-yellow-500 transition-colors mt-2"
              type="submit"
              disabled={!feedback.Feedback}
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

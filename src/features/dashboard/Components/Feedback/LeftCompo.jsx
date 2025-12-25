import { useState } from 'react'
import { handleInput } from '../../../../Utils/Feedback/Formhandler'
import handleSubmitFeedback from '../../../../Utils/Feedback/handleSubmit'

function LeftCompo() {
  const [feedback, setFeedBack] = useState({
    Feedback: '',
  })

  return (
    <>
      {/* <div className="absolute flex justify-center items-center pt-10 w-[354px] sm:w-screen h-[75vh] sm:h-[90vh] bg-sky-100/60 ">
        <p className="py-2 px-5 rounded text-gray-950 font-bold tracking-widest w-max text-center mb-2 text-5xl">
          Currenty Under Development
        </p>
      </div> */}
      <div className="w-full overflow-hidden flex flex-col sm:flex-row">
        <div className="flex justify-center items-center sm:w-1/4 px-4 pt-5 sm:py-0">
          <img
            src="https://res.cloudinary.com/dfuhnqbap/image/upload/v1766039430/feedback_ui_logo_tnuum7.png"
            alt="feedback"
            className="w-[200px] h-[200px] sm:w-auto sm:h-auto"
          />
        </div>
        <div className="pb-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start sm:justify-center bg-gray-950 min-w-[354px] sm:min-h-[85vh] ">
            <h1 className="text-4xl sm:text-5xl font-bold pb-4 sm:border-b-2 border-white/10 w-[70%] text-center">
              Feedback
            </h1>
            <div className="flex flex-col justify-center items-center py-4">
              <p className="text-lg sm:text-lg text-gray-400 px-4 text-center mb-2">
                I’d love your feedback. Tell me what you think about the App!
              </p>
            </div>
            <div className="max-w-[80vw] min-w-[300px] w-[90vw] sm:w-[550px]">
              <form
                className="flex flex-col gap-2"
                onSubmit={(e) => handleSubmitFeedback(e, feedback, setFeedBack)}
              >
                <textarea
                  placeholder="Help use serve you better with a small feedBack"
                  className="p-2 w-full text-black bg-slate-100/80 sm:w-auto focus:bg-slate-200 rounded tracking-wide focus:outline-none"
                  value={feedback.Feedback}
                  rows="7"
                  onChange={(e) => handleInput(e, setFeedBack)}
                  name="Feedback"
                />
                <button
                  className={`${
                    !feedback.Feedback
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-yellow-400 hover:bg-yellow-500 cursor-pointer'
                  } text-black px-6 py-2 rounded-md  transition-colors mt-2 font-semibold tracking-widest`}
                  type="submit"
                  disabled={!feedback.Feedback}
                >
                  Submit Feedback
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftCompo

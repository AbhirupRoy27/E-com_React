import React from 'react'

function RightCompo() {
  return (
    <div className="bg-slate-200 md:w-[30%] h-[90vh] overflow-scroll no-scrollbar">
      <p className="text-center mt-4 font-bold text-2xl">Feedback List</p>
      <div className="px-[10%]">
        {['Amit', 'Ajay', 'Sumit', 'Pranav'].map((f, i) => (
          <div
            className="flex flex-col bg-gray-800 rounded-xl p-2 mt-3"
            key={i}
          >
            <p className="text-xl text-white">{f}'s FeedBack </p>
            <p className="bg-gray-300 my-2 rounded p-2 text-sm h-max">
              Form DescrtiptionForm DescrtiptionForm DescrtiptionForm
              DescrtiptionForm DescrtiptionForm DescrtiptionForm
              DescrtiptionForm DescrtiptionForm DescrtiptionForm
              DescrtiptionForm Descrtiption
            </p>
            <p className="text-gray-200 text-md">Category: </p>
            <div className="flex gap-2">
              <p className="text-red-300">Like</p>
              <p className="text-red-400">Count</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RightCompo

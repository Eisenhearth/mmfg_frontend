import React from 'react'

const Dashboard = () => {
  return (
    <div  className="flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-inter">Dashboard</h1>
      </div>
      <div className="flex space-x-5">
        <div className="w-1/3 bg-red-800 h-40 border-2 border-white rounded-xl">
          <h1>Total Customer</h1>
        </div>
        <div className="w-1/3 bg-red-800 h-40 border-2 border-white rounded-xl">
          <h1>Total Customer</h1>
        </div>
        <div className="w-1/3 bg-red-800 h-40 border-2 border-white rounded-xl">
          <h1>Total Customer</h1>
        </div>
      </div>
    </div>
    
  )
}

export default Dashboard

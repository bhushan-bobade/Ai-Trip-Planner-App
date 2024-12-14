import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-700">AI Travel Planner App</h2>
          <p className="text-sm text-gray-500 mt-2">Created by Bhushan Bobade</p>
          <p className="mt-2 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} AI Travel Planner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


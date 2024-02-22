import React from 'react'

const Banner = () => {
  return (
    <section className="h-80 bg-gray-200 flex items-center justify-center">
        <div className="text-center">
            <h2 className="text-4xl font-semibold mb-4">Find Your Yoga Class</h2>
            <input type="text" placeholder="Search for yoga classes..." className="px-4 py-2 rounded-full w-80 bg-white" />
        </div>
    </section>
  )
}

export default Banner;
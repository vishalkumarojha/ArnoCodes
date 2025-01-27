import React from 'react'
import layout from './layout'
//import { Button } from 'some-actual-button-library' // Replace 'some-actual-button-library' with the actual library or file path

export const HeroSection = () => {
  return (
     <main className="flex-grow">
  <section className="relative overflow-hidden min-h-screen flex items-center">
    {/* Hero content */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="text-center">
        {/* Title and subtitle enclosed in angle brackets */}
        <div className="inline-block mb-8">
          <h1 className="text-6xl font-extrabold tracking-tight text-indigo-900 sm:text-7xl md:text-8xl mb-4 font-caveat">
            <span className="block">&lt;ArnoCodes&gt;</span>
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-indigo-800 sm:text-4xl md:text-5xl mt-4">
            <span className="block">&lt;Elevate Your Coding Skills&gt;</span>
          </h2>
        </div>

        <div className="mt-10 flex flex-col items-center space-y-8">
          <p className="text-xl text-indigo-700 max-w-2xl mx-auto">
            Join our community of passionate developers and learn from industry experts. Start your coding journey
            with ArnoCodes today!
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex space-x-4">
            <Button className="bg-indigo-600 text-white hover:bg-indigo-700 text-lg px-8 py-3">Sign In</Button>
            <Button
              variant="outline"
              className="text-indigo-600 border-indigo-600 hover:bg-indigo-50 text-lg px-8 py-3"
            >
              Explore Our Courses
            </Button>
          </div> */}

          {/* Statistics */}
          <div className="mt-8 grid grid-cols-3 gap-8 text-center">
            <div className="backdrop-blur-md bg-white bg-opacity-20 rounded-lg p-4">
              <p className="text-4xl font-bold text-indigo-600">100+</p>
              <p className="mt-2 text-indigo-800">Expert-led Courses</p>
            </div>
            <div className="backdrop-blur-md bg-white bg-opacity-20 rounded-lg p-4">
              <p className="text-4xl font-bold text-indigo-600">50k+</p>
              <p className="mt-2 text-indigo-800">Successful Students</p>
            </div>
            <div className="backdrop-blur-md bg-white bg-opacity-20 rounded-lg p-4">
              <p className="text-4xl font-bold text-indigo-600">95%</p>
              <p className="mt-2 text-indigo-800">Job Placement Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
)
}

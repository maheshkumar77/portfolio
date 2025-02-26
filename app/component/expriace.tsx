

import '../css/expriance.css'
 export default function Expriance()  {
    const transition = { duration: 1.9, ease: "easeInOut" };
  return (
    <div className='w-full h-auto flex justify-center items-center py-10 px-6 flex-col gap-8'>
      {/* Title Section */}
      <div className='w-auto h-auto flex justify-start items-center flex-col'>
        <p className='text-blue-400 lg:text-6xl sm:text-2xl font-serif font-extrabold text-center'>
          Experience
        </p>
        <hr className='bg-blue-400 w-24 h-1 rounded-sm border-collapse mt-2 animate-pulse' />
      </div>

      {/* Experience Card */}
      <div 
       
      id='expi' className='w-full h-auto flex justify-center items-center  shadow-lg rounded-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl'>
        <div className='w-full h-auto flex justify-start items-start flex-col gap-4'>
          <p className='text-3xl font-bold font-mono text-yellow-50'>
            Full-stack Developer Intern
          </p>
          <p className='text-xl font-medium text-gray-600'>
            Prodigy InfoTech
          </p>
          <p className='text-lg font-light text-gray-500'>
            Dec 2024 - Feb 2025
          </p>
        </div>
      </div>
    </div>
  )
}



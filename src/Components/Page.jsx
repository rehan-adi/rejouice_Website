import React from 'react'

function Page() {
  return (
    <div className='w-auto h-[100vh] flex-col z-50 bg-[#FAF8F3] '>
           <div className='flex justify-between px-14 pt-16 items-end'>
              <div>
              <h1 className='text-2xl text-[#0E0E0E]  font-medium'>A brand accelerator</h1>
               <h1 className='text-2xl text-[#0E0E0E]  font-medium'>With two engagement models</h1>
              </div>
              <div>
                  <h1 className='text-2xl text-[#0E0E0E]  font-medium'>Paris & San Diego</h1>
              </div>
           </div>
                 <div className='border-b ml-[64px] mt-3 w-[1400px] border-black'>

                 </div>
                 <div className='flex justify-center mt-4 items-center' >
                     <p className='text-[65px] font-medium text-height'> <span className='ml-28'>We are a digital brand accelerator curating</span> <br /> dream team for dream clients. We design, <br /> develop, and scale market-defining brands by <br /> unlocking their hidden potential. Chose full <br /> cash compensation or offset up to 50% of our <br /> fees for equity in your company. Your vision, <br /> your decision.</p>
                 </div>
    </div>
  )
}

export default Page
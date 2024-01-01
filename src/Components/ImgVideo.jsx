import React from 'react'

function ImgVideo() {
  return (
    <div className='w-auto h-[100vh] pt-24  bg-[#FAF8F3]'>
        <div className='flex justify-between  px-[65px] items-center'>
            <h1 className='text-2xl text-[#0E0E0E]  font-normal'>Transforming visions into brands.</h1>
            <h1 className='text-2xl text-[#0E0E0E]  font-normal'>↵ See the work</h1>
        </div>
        <div className='flex justify-center px-[65px] gap-4 pt-5 items-center'>
          <div className='w-[40vw] Animation relative h-[78vh]'>
            <img className='object-cover h-full w-full absolute' src="https://images.prismic.io/rejouice/d8e1fa1f-4f24-41e1-a249-098c62df5aff_Group+46+%281%29.jpg?auto=compress,format" alt="" />
               <video className='z-50 h-full w-full object-cover' loop muted autoPlay src="https://prismic-io.s3.amazonaws.com/rejouice/87835eca-32b7-4eeb-91fc-4ba0dad1fdec_Website-homepage-Work-01_1.mp4"></video>
          </div>
          <div className='w-[40vw] relative Animation h-[78vh]'>
            <img className='w-full h-full absolute object-cover' src="https://images.prismic.io/rejouice/e0350a3d-c390-4d97-af1a-5c86bc822b52_Group+3929.jpg?auto=compress,format" alt="" />
          <video className='h-full w-full object-cover' loop muted autoPlay src="https://prismic-io.s3.amazonaws.com/rejouice/3492b027-4212-4103-b2e2-aa702345d784_Website-homepage-Work-02_1.mp4"></video>
          </div>
          <div className='w-[40vw] relative Animation h-[78vh]'>
            <img className='w-full hover:opacity-0 h-full absolute object-cover' src="https://images.prismic.io/rejouice/2874f084-ec6c-4a19-b025-a55c1e6db929_Group+3692.jpg?auto=compress,format" alt="" />
          <video className=' h-full  w-full object-cover' loop muted autoPlay src="https://prismic-io.s3.amazonaws.com/rejouice/363f6760-3496-4638-8fc5-3b5d7711087c_Website-homepage-Work-03_1.mp4"></video>
          </div>
          </div>
    </div>
  )
}

export default ImgVideo
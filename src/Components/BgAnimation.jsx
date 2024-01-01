import React from 'react';

function BgAnimation() {
  return (
    <div className='w-auto h-[100vh] flex flex-col justify-center items-center bg-[#FAF8F3] pt-10'>
      <img
        src="https://www.rejouice.com/assets/images/apply-poster.png"
        className='w-[1111px]'
        alt="Poster"
      />
      <div className="absolute text-center">
        <h1 className="text-6xl text-white font-normal">1 seat </h1>
        <p className='text-white font-normal'>available for 2024</p>
      </div>
      <svg class="abs tl:0 fit transform rotate:-90deg" className='absolute opacity-80 w-[80vh]' viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="49" stroke="#fff" stroke-width="0.25" fill="none" class="o:0.3 dasharray:302 dashoffset:604 (.in-view):dashoffset:400 (.in-view):tween:all,2.8s,easeOutSlow "></circle>
        <circle cx="50" cy="50" r="49" stroke="#fff" stroke-width="0.25" fill="none" class="dasharray:302 dashoffset:302 (.in-view):dashoffset:100 (.in-view):tween:all,2.8s,easeOutSlow "></circle>
      </svg>
      <svg className='absolute w-[585px]' class="abs tl:0 fit transform rotate:0 (.in-view):rotate:237deg (.in-view):tween:all,2.8s,easeOutSlow " viewBox="0 0 100 100">
        <circle cx="50" cy="1" r="1" fill="#fff"></circle>
      </svg>
    </div>
  );
}

export default BgAnimation;

import React from 'react'

function BgAnimation() {
  return (
    <div className='w-auto h-[100vh] flex justify-center items-center pt-10  bg-black'>
      <img src="https://www.rejouice.com/assets/images/apply-poster.png" alt="" />
      {/* <video autoplay loop muted poster="assets/images/apply-poster.png" src="assets/videos/RJ-BALL-BLUE-ORANGE-scaled.webm" className="abs tl:50% w:fit w:180% max-w:100000% transform shift-x:-50% shift-y:-50% w:160%@m" is-clone=""></video> */}
      <svg class="abs tl:0 fit transform rotate:-90deg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="49" stroke="#fff" stroke-width="0.25" fill="none" class="o:0.3 dasharray:302 dashoffset:604 (.in-view):dashoffset:400 (.in-view):tween:all,2.8s,easeOutSlow "></circle>
        <circle cx="50" cy="50" r="49" stroke="#fff" stroke-width="0.25" fill="none" class="dasharray:302 dashoffset:302 (.in-view):dashoffset:100 (.in-view):tween:all,2.8s,easeOutSlow "></circle>
      </svg>
      <svg className='' class="abs tl:0 fit transform rotate:0 (.in-view):rotate:237deg (.in-view):tween:all,2.8s,easeOutSlow " viewBox="0 0 100 100">
        <circle cx="50" cy="1" r="1" fill="#fff"></circle>
      </svg>
    </div>
  )
}

export default BgAnimation
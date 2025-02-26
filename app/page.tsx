import React from 'react'
import Hero from './component/Hero'
import { FloatingNav } from './component/ui/Floatingnav'
import { FaHome } from 'react-icons/fa'
 import { GetinTouch } from './component/GetinTouch'
 import { FloatingDockDemo } from './component/Links'
 import { WobbleCardDemo } from './component/newAbout'
 import { ThreeDCardDemo } from './component/projectcomponent'
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { LampDemo } from './component/Aboutright'
import Skills from './component/Skills'
import { RiBaseStationLine } from "react-icons/ri";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import Expriance from './component/expriace'



const page = () => {
  return (
    <main className=' relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
    <div className=' max-w-7xl w-full flex flex-col gap-8 justify-center items-center h-auto'>
      <FloatingNav navItems={[
        {name:'Home' , link:"#home", icon:<FaHome/>},
        {name:'About', link:"#About", icon:<MdOutlineRoundaboutRight/>},
        {name:'Work', link:"#work", icon:<IoCodeWorkingOutline/>},
        {name:'Experience', link:"#expriace", icon:<TbLayoutSidebarLeftExpandFilled/>},
        {name:'HireMe' ,link:"#hireMe", icon:<FaMessage/>},
        {name:'FindMeOnOnline' ,link:"#online", icon:<RiBaseStationLine/>}
      ]}/>
     <div id='home' >
     <Hero/>
     </div>
     <div id='About' className=' w-[100%]'>
     <WobbleCardDemo/>
     </div>
     <div id='expriace'>
      <Expriance/>
     </div>
 
     <div id='skill' >
     <Skills/>
     </div>
     <div id='work' >
     <LampDemo/>
    <ThreeDCardDemo/>
     </div>
     <div id='hireMe' >
     <GetinTouch/>
     </div>
     <div id='online'>
     <FloatingDockDemo/> 
     </div> 
  </div>
    </main>
  )
}

export default page;

import React from 'react'
import styles from '../style'
import Secondvideo from '../video/secondvideo.mp4'
import Button from '@mui/material/Button';
import { BiChevronRight } from "react-icons/bi";



const Homesecondhero = () => {
  return (
    <div className='w-full mt-12 md:mt-0  '>
          <section id="home" className={`flex md:px-28  md:flex-row  flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 md:pl-28 bg-discount-gradient rounded-[10px] mb-2">
     <div>
    <span className='md:text-xl text-xl pl-2  md:pl-1 text-[#7991a2]  font-bold '> Instant Bank Payments</span> 
       <h1 className=' hidden md:block md:text-5xl md:pt-5 text-[#093554] md:pb-10 tracking-wide text-4xl pl-10 md:pl-0   ss:leading-[100.8px] leading-[39px] md:leading-[50px] font-extrabold '> Build better payments <br/> experiences</h1>
       <h1 className='text-3xl  mb-10 pl-2 text-[#093554] md:hidden pt-2 font-extrabold '> Build better payments experiences</h1>
       <div className='md:hidden mb-10 flex items-center justify-center'>

<video  className='w-80 border-8  rounded-3xl border-slate-200 ' autoPlay muted loop src={Secondvideo} />

    </div>
       <span className='font-normal   text-lg'>Everything you need to send and receive money on the <br className='hidden md:block'/> fastest rails at the lowest rates with a first-class user <br className='hidden md:block'/> experience.</span>

       <div className='md:mt-10 mt-10 mb-5 '> 
       <div className='hover:cursor-pointer mb-5 '> 

{/* First */}
      <div className='flex '>
        <div className='md:mr-4 mt-1 md:mt-1'>
          <span className='text-blue-300 '> 
          <i class="fa-solid fa-2xl fa-money-check"></i>

          </span>
       

        </div>
    <div>
      
    </div>
      <p className=' md:pl-1 pl-3 text-[#093554]  hover:text-blue-300  '> Payments </p>
   
      <  BiChevronRight className='text-blue-400' size={20} /> 
        </div>
        <span className='font-normal  text-[#849aa9] pl-12 md:pl-14 '> Pay-ins, refunds, withdrawals</span>
       
       </div>

       <div className='hover:cursor-pointer '> 

{/* Second */}
<div className='flex md:mt-5  '>
  <div className='md:mr-4 mt-1'>
  <span className='text-blue-300'> 
          <i class="fa-solid fa-2xl fa-money-check"></i>

          </span>

  </div>

<p className='text-[#093554] hover:text-blue-400 pl-3  md:pl-1  '> Payouts </p>

<  BiChevronRight className='text-blue-400' size={20} /> 
  </div>
  <span className='font-normal text-[#849aa9] pl-12  md:pl-14 '> Withdrawals and refunds</span>
 
 </div>

 
       <div className='hover:cursor-pointer'> 

{/* third */}
<div className='flex  md:mt-5 mt-5   '>
  <div className='md:mr-4 mt-1'>
  <span className='text-blue-300'> 
          <i class="fa-solid fa-2xl fa-money-check"></i>

          </span>

  </div>

<p className='text-[#093554] hover:text-blue-400 pl-3 md:pl-1  '> Varibale recurring payments </p>

<  BiChevronRight className='text-blue-400' size={20} /> 
  </div>
  <span className='font-normal text-[#849aa9] pl-12  md:pl-14 '> Ad-hoc and subcription payments</span>
 
 </div>
 

      
<div className=' hidden md:block mt-10 md:mt-10 space-x-5 '>
<Button className=" bg-[#f7ab1b] border-[#f7ab1b] text-base  hover:border-[#f7ab1b] hover:bg-[#f38d00]  text-white px-6 py-2 " variant="outlined"> Contact Us <BiChevronRight size={30} /> </Button>
<Button className=" text-[#f7ab1b] border-[#f7ab1b] text-base hover:text-white hover:border-[#f7ab1b] hover:bg-[#f38d00]   px-6 py-3 " variant="outlined"> Documentation  </Button>
</div>

{/* For Mobile */}
<div className=' pt-10 md:hidden'>
    <div className='w-full h-full mb-5 '>
    <button  class="fluid ui button orange ">  Contact Us </button>
    </div>
    <div className='w-full h-full '>
    <button  class="fluid ui button blue "> Documentation </button>
    </div>

</div>

 
       </div>
      </div>
      <div>
      
      </div>
    
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          
          
         
        </div>

     
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:px-10 md:my-0 md:pt-16 my-5 relative`}>
        <div className='hidden md:block pb-5 '>

<video  className='w-80 border-8   rounded-3xl border-slate-200 ' autoPlay muted loop src={Secondvideo} />

    </div>

      </div>

    </section>
        
    </div>
  )
}

export default Homesecondhero
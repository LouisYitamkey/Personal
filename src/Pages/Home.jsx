import React from 'react'
import Navbar from '../components/Navbar'
import { Button } from 'antd';
import Homehero from '../components/Homehero';
import Homesecondhero from '../components/Homesecondhero';
import Partners from '../components/Partners';
import Homethirdhero from '../components/Homethirdhero';
import Usecases from '../components/Usecases';
import Experts from '../components/Experts';
import Developers from '../components/Developers';


const Home = () => {
  return (
    <div>
      
        <div className='flex justify-center items-center '>
        <Homehero />
        </div>

        <div className=''>
        <Homesecondhero />
        </div>

        <div className=' pl-6 md:pl-0 md:py-24 pt-24  md:pt-10  py-14 bg-slate-200'>
        <Partners />
         </div>
       

         <div>
         <Homethirdhero />
         </div>

         <div>
         <Usecases />


         </div>
         <div>
         <Experts />
         </div>

         <div>
         <Developers />
         </div>
    

    </div>
  )
}

export default Home
import React from 'react';
// import Sec3 from './Sec3'
import './sec3.css'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import t1 from '../images/t1.png'
import t2 from '../images/t2.png'
import t3 from '../images/t3.png'
import t1c from '../images/t1c.png'
import t2c from '../images/t2c.png'
import t3c from '../images/t3c.png'




const responsive = {
     superLargeDesktop: {
       breakpoint: { max: 4000, min: 3000 },
       items: 5,
     },
     desktop: {
       breakpoint: { max: 3000, min: 1024 },
       items: 3,
     },
     tablet: {
       breakpoint: { max: 1024, min: 464 },
       items: 2,
     },
     mobile: {
       breakpoint: { max: 464, min: 0 },
       items: 1,
     },
   };



export default function Section3()
{
    return (
        <div className="sec3">
             <div > <h3 className='sec31'>Key Persons</h3>
                      <h2 className='sec32'>Meet Our teachers</h2>
              </div>
              <div className='sec39'>
              <div className='sec33'>
                          <div><img  className='secd34' src={t1} alt="Logo" /></div>
                          <div className='secd35'>christian haward</div>
                     <div className='sec40'>    <div><img  className='secd36' src={t1c} alt="Logo" /></div>
                          <div className='secd37'>italian teachers</div>
                          </div> 
              </div>
              <div className='sec33'>
                          <div><img  className='secd34' src={t2} alt="Logo" /></div>
                          <div className='secd35'>christian haward</div>
                          <div className='sec40'>   <div><img  className='secd36' src={t2c} alt="Logo" /></div>
                          <div className='secd37'>italian teachers</div>
              </div> </div>
              <div className='sec33'>
                          <div><img  className='secd34' src={t3} alt="Logo" /></div>
                          <div className='secd35'>christian haward</div>
                          <div className='sec40'>          <div><img  className='secd36' src={t3c} alt="Logo" /></div>
                          <div className='secd37'>italian teachers</div>
              </div>   </div>
        
        </div>
        </div>
           )

}

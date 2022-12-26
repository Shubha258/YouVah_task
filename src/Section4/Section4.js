import React from 'react';
// import Secd2 from './Secd2'
import './sec4.css'
import sec41 from '../images/sec41.png'
import sec42 from '../images/sec42.png'

export default function Section2()
{
    return (
        <div className="sec4">
                 <div > <h3 className='sec41'>Top studying</h3>
                      <h2 className='sec42'>Our student says</h2>
                 </div>
                 <div className='secc41'>
                 <div ><img  className='sec43' src={sec41} alt="Logo" /></div>
                 <container className='sec44'>
                     <h3 className='sec45'>Martin Watson</h3>
                     <div className='secc42'><img  className='sec46' src={sec42} alt="Logo" />
                     <p className='sec47'>B2 course student</p></div>
                     <h4 className='sec48'> There is no way I could made the same progress learining
                        spanish without using lingua. The best Part now learinig Spanish 
                        has become one of my biggest hobby.
                     </h4>
                 </container>
                 </div>

        </div>
        
           
           )

}


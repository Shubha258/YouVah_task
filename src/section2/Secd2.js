import React from 'react';
import img7 from '../images/Sec2img1.png'
import img from '../images/Sec2img2.png'
import img3 from '../images/Sec2img3.png'


export default function Secd2()
{
    return (
        <div className="secd2">
            <div className='fstbox'>
             <div><img  className='secd21' src={img7} alt="Logo" /></div>
             <h2 className="secd22">Speaking Clubs</h2>
             <h3 className="secd23">In our school you will practise your speaking 
                skills and just get a lot of positve emotions
               </h3>
             </div>

             <div className='sndbox'>
             <div><img  className='secd21' src={img3} alt="Logo" /></div>
             <h2 className="secd22">Quality Conrtrol</h2>
             <h3 className="secd23">A huge work has been done with the teachers and their
              work has been monitored throughly
               </h3>
             </div>

             <div className='thdbox'>
             <div><img  className='secd21' src={img} alt="Logo" /></div>
             <h2 className="secd22">Progress analysis</h2>
             <h3 className="secd23">The CEF of Refrence has been used at our school.It allows to control our students 
               success in studying.
               </h3>
             </div>


        </div>
           
           )

}



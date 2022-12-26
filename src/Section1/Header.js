import React from 'react'
import  './Sec1.css'


export default function Header()
{
    return (
        <div className="TopPageNav">
        <div className="CompanyName">
          <div className="Logo-First-Part"></div>
          <div className="Logo-Second-Part"></div>
          <div className="Font5">Lingua</div>
        </div>

        <div className="NavMid">
          <ul>Courses</ul>
          <ul>About us</ul>
          <ul>Teachers</ul>
          <ul>Pricing</ul>
          <ul>Careers</ul>
          <ul>Blog</ul>
        </div>
        <div className="NavRight">Get started</div>
      </div>
 
        
    )
}

import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                 DASHBOARD
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="https://fitpeo.com/medical-kit" target='_blank'>
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="https://fitpeo.com/chronic-care" target='_blank'>
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="https://fitpeo.com/home" target='_blank'>
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="https://fitpeo.com/revenue-calculator">
                    <BsListCheck className='icon'/> Revenue Calculator
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="https://fitpeo.com/cpt-codes" target='_blank'>
                    <BsMenuButtonWideFill className='icon'/> CPT Code
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="https://fitpeo.com/download" target='_blank'>
                    <BsFillGearFill className='icon'/> Download
                </a>
            </li>
            <li className='sidebar-list-item'>
            <a href="mailto:hemanth3199@gmail.com" target='_blank'>
                <h6>Designed by HEMANTH M</h6> </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
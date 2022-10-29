import React, { useState } from 'react';
import {AiOutlineClockCircle}from "react-icons/ai";
import {FaBars} from 'react-icons/fa'
import {RiFileList3Line} from 'react-icons/ri'
import { NavLink } from 'react-router-dom';
import Styles from'./SideBar.module.css'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Relógio + Sorteador",
            icon:<AiOutlineClockCircle/>
        },
        {
            path:"/listar-pessoas",
            name:"Listar Pessoas",
            icon:<RiFileList3Line/>
        },
    ]
    return (
        <div className={Styles.container}>
           <div style={{width: isOpen ? "200px" : "60px", height:'100vh'}} className={Styles.sidebar}>
               <div className={Styles.topsection}>
                   <div style={{marginLeft: isOpen ? "60px" : "0px"}} className={Styles.bars}>
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className={Styles.link} activeclassName={Styles.active}>
                           <div className={Styles.icon}>{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className={Styles.link_text}>{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
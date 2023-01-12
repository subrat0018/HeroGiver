import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Assets/index"
import { dashboard, logo, thirdweb } from '../Assets/index'
import {navlinks} from "../Constants/index"
const Icon = (props) =>
{
    console.log(props.active);
    return (<div onClick={props.handle} className={`flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${props.active === props.name? 'bg-gray-200':null}`} >
        <Link to={props.link}>
            <img src={props.img} />
        </Link>
    </div>)
}
const SideBar = () => {
  const [active,setActive] = useState('dashboard');
  const navigate = useNavigate()
  return (
    <div className='m-4 mr-0 w-16 px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 flex-col content-center'>
        <div className='h-[15vh]'>
        <Icon img = {logo} link = '/'/>
        </div>
        <div className='h-[67vh]'>
            <div>
                {
                    navlinks.map((item,itemno)=>{return <Icon active = {active} disabled = {item.disabled} img = {item.imgUrl} link = {item.link} key = {itemno} name = {item.name} handle = {() => {setActive(item.name)}} />})
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar
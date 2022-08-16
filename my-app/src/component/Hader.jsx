import  React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import {
    Home,
    Add,
    Explore,
    ExploreOutLined,
    Notifications,
    NotificationsOutLined,

} from "@mui/icons-material"
import {
    HomeOutlined,
    AddOutlined,
    ExploreOutlined,
    CircleNotificationsOutlined,
    AddBoxRounded

}
     from '@mui/icons-material';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
// import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';

import { useState } from 'react'

const Hader = () => {

const [tab , setab]=useState(window.location.pathname)

console.log(tab)



    return (
        <div className='header'  >

            <Link to="/"  onClick={()=> setab("/")}  >
              {
                tab==="/"?<Home style={{color:"black"}}  />:<HomeOutlined/>
              }
            </Link>

            <Link to="/Add " onClick={()=> setab("/Add")} >
                {
                    tab=="/Add"?<Add style={{color:"black"}}  />:<AddBoxRounded/>
                }
            </Link>

            <Link to="/Explore " onClick={()=> setab("/Explore")}  >
                {
                    tab=="/Explore"?<Explore style={{color:"black"}}  />:<ExploreOutlined/>
                }
            </Link>

            <Link to="/Notifications " onClick={()=> setab("/Notifications")   }>
                {
                    tab=="/Notifications"?<Notifications style={{color:"black"}}  />:<CircleNotificationsOutlined/>
                }
            </Link>


        </div>
    )
}

export default Hader
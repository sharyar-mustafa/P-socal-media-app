import  React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import {
    Home,
    HomeOutLined,
    Add,
    AddOutLined,
    Explore,
    ExploreOutLined,
    Notifications,
    NotificationsOutLined,

} from "@mui/icons-material"
import { useState } from 'react'
const Hader = () => {

const [tab , settab]=useState("/")

    return (
        <div className='header'  >

            <Link to="/ "  onClick={()=> settab("/")}  >
                <Home />
            </Link>

            <Link to="/Add " onClick={()=> settab("/Add")} >
                <Add />
            </Link>

            <Link to="/Explore ">
                <Explore />
            </Link>

            <Link to="/Notifications ">
                <Notifications />
            </Link>


        </div>
    )
}

export default Hader
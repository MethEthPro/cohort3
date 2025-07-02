// should return 
// header
// html of the route
// then footer

import {Link, Outlet} from "react-router-dom"

function Layout(){

    return(
        <div>
            {/* headers */}
            <Link to={"/"}>HOME </Link>
            |
            <Link to={"/NEET"}> NEET </Link>
            |
            <Link to={"/JEE"}> JEE </Link>

            {/* html body */}
            <Outlet/>

            {/* footers */}

            <Link>Contact Us</Link>


             
        </div>
    )

}

export default Layout;
import "./ComponentStyling.css"


import {useNavigate} from "react-router-dom";

const Sidebar = () => {

    const navigate = useNavigate();

    return(
        <aside className = "sideBar">
            <nav className = "sideBarGroup">
                <ul>
                    <li onClick  = {()=> navigate("../pages/Dashboard")}>DashBoard</li>
                    <li onClick  = {()=> navigate("../pages/Transactions")}>Transactions</li>
                    <li  onClick  = {()=> navigate("../pages/alert")}>Alerts</li>
                    <li>Analytics</li>
                </ul>
            </nav>                

            
        </aside>
    )
}

export default Sidebar;
import { NavLink, Outlet } from "react-router-dom"

function DashBoardLayOut() {
  return (
    <div>
        <h2>DashBoardLayOut</h2>
        <nav>
            <NavLink to="profile">Profile</NavLink> | {" "}
            <NavLink to="setting">Setting</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default DashBoardLayOut
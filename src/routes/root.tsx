import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import { SlCalender, SlGrid, SlMenu } from "react-icons/sl";
import { useState } from "react";

function Root() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sidebar collapsed={collapsed}>
        <Menu>
          <MenuItem
            icon={<SlMenu />}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          />
          <MenuItem component={<Link to="/logger" />} icon={<SlGrid />}>
            Logger
          </MenuItem>
          <MenuItem component={<Link to="/calendar" />} icon={<SlCalender />}>
            Calendar
          </MenuItem>
        </Menu>
      </Sidebar>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Root;

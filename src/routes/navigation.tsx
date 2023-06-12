import { useLocation, Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

const NavigationContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const DetailContainer = styled.div`
  height: 100%;
`;

function Navigation() {
  return (
    <>
      <DetailContainer>
        <Outlet />
      </DetailContainer>
      <NavigationContainer>
        <BottomNavigation value={useLocation().pathname}>
          <BottomNavigationAction
            component={Link}
            to={"/logger"}
            value="/logger"
            label="Logger"
            icon={<DirectionsRunIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to={"/calendar"}
            value="/calendar"
            label="Calendar"
            icon={<CalendarTodayIcon />}
          />
        </BottomNavigation>
      </NavigationContainer>
    </>
  );
}

export default Navigation;

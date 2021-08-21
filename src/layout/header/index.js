import React from "react";
import {
  AppBar,
  Typography,
  useScrollTrigger,
  Toolbar,
} from "@material-ui/core";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
  return (
    <div>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Blog Post</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default Header;

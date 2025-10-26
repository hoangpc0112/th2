import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const location = useLocation();
  const pathname = location.pathname;
  let contextMessage = "Photo Sharing";

  const userDetailMatch = pathname.match(/\/users\/([^/]+)/);
  const userPhotosMatch = pathname.match(/\/photos\/([^/]+)/);

  let userId;
  if (userDetailMatch) {
    userId = userDetailMatch[1];
    const user = models.userModel(userId);
    if (user) {
      contextMessage = `${user.first_name} ${user.last_name}`;
    }
  } else if (userPhotosMatch) {
    userId = userPhotosMatch[1];
    const user = models.userModel(userId);
    if (user) {
      contextMessage = `Photos of ${user.first_name} ${user.last_name}`;
    }
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" color="inherit">
          B22DCAT128
        </Typography>
        <Typography variant="h5" color="inherit">
          {contextMessage}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;

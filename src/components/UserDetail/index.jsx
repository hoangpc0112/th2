import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";

import "./styles.css";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <Typography>User not found!</Typography>;
  }

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h4">
        {user.first_name} {user.last_name}
      </Typography>
      <Typography variant="body1">
        <strong>Location:</strong> {user.location}
      </Typography>
      <Typography variant="body1">
        <strong>Description:</strong> {user.description}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Occupation:</strong> {user.occupation}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`/photos/${user._id}`}
      >
        View Photos
      </Button>
    </Paper>
  );
}

export default UserDetail;

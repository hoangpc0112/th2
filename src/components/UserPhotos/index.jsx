import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
} from "@mui/material";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";

import "./styles.css";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  return (
    <div>
      {photos.map((photo) => (
        <Card key={photo._id}>
          <CardMedia
            src={`/images/${photo.file_name}`}
            component="img"
            height="400"
            alt={`Photo ${photo._id}`}
          />
          <CardContent>
            <Typography variant="caption" display="block" gutterBottom>
              Posted on: {new Date(photo.date_time).toLocaleString()} {/*  */}
            </Typography>

            <Typography variant="h6">Comments:</Typography>
            <List dense>
              {photo.comments?.map((comment) => (
                <React.Fragment key={comment._id}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      secondary={
                        <>
                          <Typography
                            component={Link}
                            to={`/users/${comment.user._id}`}
                            color="primary"
                            style={{ textDecoration: "none" }}
                          >
                            {`${comment.user.first_name} ${comment.user.last_name}`}
                          </Typography>
                          {` - ${new Date(comment.date_time).toLocaleString()}`}{" "}
                        </>
                      }
                    />
                    {comment.comment}
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;

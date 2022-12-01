import React, { useEffect } from "react";
import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Rating,
    Typography,
  } from "@mui/material";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  

function ComentarioRemix({allUsers, reviewsByProduct, id, image, name}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const userbyName = (uId) => {
        const userById = allUsers?.find((u) => u.id === uId);
        return userById?.name;
    };

    const mappedReviews = reviewsByProduct?.map((r) => ({
        id: r._id,
        person: userbyName(r?.user),
        rating: r.rating,
        comment: r.comment
    }));


  return (
    <div >
      <List
        sx={{
          width: "100%",
          maxWidth: 1000,
          bgcolor: "background.paper",
        }}
        >
        {reviewsByProduct
          ? mappedReviews?.map((review) => (
              <ListItem
                alignItems="flex-start"
                button
                key={review?.person + review?.id}
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Product Picture"
                    src={image?image[0] : []}
                
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={review?.person}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "block" }}
                        component="span"
                        variant="body3"
                        color="goldenrod"
                      >
                        {name? name : <p>Anonymus</p> }
                      </Typography>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {review?.comment}
                      </Typography>
                    </>
                  }
                />
                <Rating
                  name="Rating"
                  value={review?.rating}
                  readOnly
                  size="small"
                />
              </ListItem>
            ))
          : "Cargando..."}
      </List>
    </div>
  )
}

export default ComentarioRemix
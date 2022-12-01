import {
  //   Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { formatLine } from "../../../utils/functions";

const ReviewsList = () => {

  const reviews = useSelector((state) => state.review.reviews);
  setTimeout(() => {
  if (reviews) {
    return (
      <Stack direction='row' spacing={1}>
        {reviews?.map((rev) => (
          <Card key={rev?._id} sx={{ maxWidth: 280 }}>
            <CardHeader
              sx={{ maxHeight: 64 }}
              title={formatLine(19, rev?.product?.name)}
            />
            {/* <CardMedia
        component="img"
        height="280"
        image={img[0]}
        maxWidth="8"
      /> */}
            <CardContent>
              <Typography variant='body2' color='secondary'>
                {`${rev?.date}`}
              </Typography>
              <Rating
                precision={0.1}
                defaultValue={0}
                max={5}
                value={rev?.rating * 1}
                readOnly
              />
              <Typography
                variant='body1'
                color='secondary'
              >{`${rev?.comment}`}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    );
  } else {
    return (
      <>
        <Typography>Aún no has hecho ninguna review</Typography>
      </>
    );
  }} , 500) 
};

     
export default ReviewsList;

import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import UseUpload from "./useUpload";
import { Save } from "@mui/icons-material";

const ImgUpload = (props) => {
  const [logo, setLogo] = useState("");
  const [imageUpload] = useState({});
  const [, setImg] = useState({});

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
      setLogo(e.target.files[0]);
    }
  };
  const profileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.REACT_APP_SECURE_CLOUDY_PRESET
    );
    let data = [];
    const cloudyName = process.env.REACT_APP_SECURE_CLOUDY_NAME;
    await axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudyName}/image/upload.`,
        formData
      )
      .then((response) => {
        data.push(response.data["secure_url"]);
        props(data);
      });
    return data;
  };
  const handleSubmit = async (e) => {
    imageUpload.image = logo;
    await profileUpload(logo);
  };
  return (
    <Box>
      <Typography variant='caption' display='block' gutterBottom>
        Verás las imágenes en ésta pestaña
      </Typography>
      <Box my={2} display='flex' justifyContent='center' alignContent='center'>
        <UseUpload useUpload={handleImg} image={imageUpload.image} />
        <Button
          disabled={logo.length === 0}
          type='submit'
          color='primary'
          onClick={(e) => handleSubmit(e)}
        >
          <Save />
          Guardar
        </Button>
      </Box>
    </Box>
  );
};
export default ImgUpload;

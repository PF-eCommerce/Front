import { Delete, Upload } from "@mui/icons-material";
import { Avatar, Button as MuiButton, styled } from "@mui/material";
import { Box, spacing } from "@mui/system";
import { useRef, useState } from "react";
// import { config } from "./cloudinaryConf";

const UseUpload = (props) => {
  const [image, _setImage] = useState([]);
  const inputFileRef = useRef();
  const cleanup = () => {
    URL.revokeObjectURL(image && props.image);
    inputFileRef.current.value = null;
  };
  const setImage = (newImage) => {
    if (image.length === 4) {
      cleanup();
    }
    _setImage(newImage);
  };
  const handleOnchange = (e) => {
    const newImage = e.target.files[0];
    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
    props.useUpload(e);
  };
  const Button = styled(MuiButton)(spacing);
  const BigAvatar = styled(Avatar)`
    margin-left: 40%;
    border: 1px solid grey;
    margin-top: 10%;
    box-shadow: 1px 1px 15px -5px black;
  `;

  return (
    <Box>
      <BigAvatar
        alt='imaLength'
        src={image}
        style={{ width: "150px", borderRadius: "8px", height: "300px" }}
      />
      <input
        ref={inputFileRef}
        accept='image/*'
        hidden
        id='avatar-image-upload'
        type='file'
        onChange={handleOnchange}
      />
      <label htmlFor='avatar-image-upload'>
        <Button color='primary' component='span'>
          {image.length === 0 ? <Upload mr={2} /> : <Delete mr={2} />}
          {image.length === 0 ? "Cargar" : "Cargada"}
        </Button>
      </label>
    </Box>
  );
};

export default UseUpload;

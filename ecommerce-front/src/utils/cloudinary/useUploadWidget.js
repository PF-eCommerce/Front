import { useRef, useEffect, useState } from "react";
import { config } from "./cloudinaryConf";

const useUploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [images, setImages] = useState([""]);
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      config,
      async (error, result) => {
        if (!error && result && result.event === "success") {
          setImages((prev) => [...prev, result.info.url]);
        }
      }
    );
  });
  console.log(images);
  if (images !== [""]) {
    return images;
  } else {
    widgetRef?.current?.open();
  }
};

export default useUploadWidget;

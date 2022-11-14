import { Button } from "@mui/material";
import { useRef, useEffect } from "react";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_SECURE_CLOUDY_NAME,
        uploadPreset: process.env.REACT_APP_SECURE_CLOUDY_PRESET,
        sources: [
          "local",
          "url",
          "camera",
          "google_drive",
          "dropbox",
          "instagram",
        ],
        googleApiKey: "<image_search_google_api_key>",
        showAdvancedOptions: false,
        cropping: false,
        multiple: true,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#FFF8F8",
            windowBorder: "#85AB85",
            tabIcon: "#B55C00",
            menuIcons: "#0063E2",
            textDark: "#904C4C",
            textLight: "#F7F7F7",
            link: "#B35A00",
            action: "#FF9CF9",
            inactiveTabIcon: "#B5C5B3",
            error: "#F44235",
            inProgress: "#B2FF88",
            complete: "#76B100",
            sourceBg: "#FFFCED",
          },
          fonts: {
            default: null,
            "'Poppins', sans-serif": {
              url: "https://fonts.googleapis.com/css?family=Poppins",
              active: true,
            },
          },
        },
      },
      async (error, result) => {
        if (!error && result && result.event === "success") {
          return result.info.url;
        }
      }
    );
  });
  return (
    <>
      <Button onClick={() => widgetRef.current.open()}>Abrir</Button>
    </>
  );
};
export default UploadWidget;

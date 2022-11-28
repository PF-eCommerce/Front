/* import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Carrusel({ images, autoplay }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(autoplay){
            const interval = setInterval(() => {
                selectNewImage(selectedIndex, images);
            }, 5000)
            return () => clearInterval(interval)
        }
    })

    const selectNewImage = (index, next = true) => {
        setLoaded(false);
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 500);
    }

    const previous = () => {
        selectNewImage(selectedIndex, false)
    };

    const next = () => {
        selectNewImage(selectNewImage(selectedIndex))
    }

    return (
        <Box
            sx={{
                display: "flex",
                width: { sx: "auto", sx: "40vh", md: "30vw" },
                height: { sx: "auto", sx: "40vh", md: "30vw" },
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: "30px"
            }}
        >
            <Box
                component="img"
                sx={{
                    maxWidth: "100%",
                    height: "90%",
                    borderRadius: "20px",
                    transition: "1s",
                    opacity: "0",
                    "&.loaded": {
                        opacity: "1"
                    }
                }}
                alt="Product"
                src={selectedImage}
                className={loaded ? "loaded" : ""}
                onLoad={() => setLoaded(true)}
            />
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <Button
                    variant="contained"
                    onClick={previous}
                    sx={{
                        marginRight:"10px"
                    }}
                >
                    Anterior
                </Button>
                <Button
                    variant="contained"
                    onClick={next}
                >
                    Siguiente
                </Button>
            </Box>
        </Box>
    )
} */
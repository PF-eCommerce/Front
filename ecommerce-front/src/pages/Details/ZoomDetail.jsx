import React, { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import ReactImageMagnify from 'react-image-magnify';
import './Detail.css'


function ZoomDetail({ images }) {
    const [img, setImg] = useState(null);
    //console.log('images1:', images[0])
    //console.log('img:', img)

    const hoverHandler = (image, i) => {
        setImg(image);
        refs.current[i].classList.add('active');
        for (var j = 0; j < images.length; j++) {
            if (i !== j) {
                refs.current[j].classList.remove('active');
            }
        }
    };
    const refs = useRef([]);
    refs.current = [];
    const addRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    useEffect(() => {
        if(!img){
            setImg(images[0])
        }
        return
    })


  return (
    <div>
        <Box
            sx={{
                display: "flex",
                /* width: { sx: "auto", sx: "40vh", md: "30vw" },
                height: { sx: "auto", sx: "40vh", md: "30vw" }, */
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: "30px"
            }}
        >
            
            <Box
                sx={{
                    width: "100%",
                    /* display: "grid", */
                    justifyContent: "center"
                }}
            >
                <div className="left">
                
                    <div className="left_2">
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: false,
                                    src: img,
                                    width: 350,
                                    height: 400,
                                },
                                largeImage: {
                                    src: img,
                                    width: 1200,
                                    height: 1800,
                                },
                                enlargedImageContainerDimensions: {
                                    width: '100%',
                                    height: '100%',
                                },
                                /* enlargedImagePosition: 'over', */
                            }}
                        />
                    </div>
                    <div className="left_1">
                        {images.map((image, i) => (
                            <div
                                className={i == 0 ? 'img_wrap active' : 'img_wrap'}
                                key={i}
                                onMouseOver={() => hoverHandler(image, i)}
                                ref={addRefs}
                            >
                                <img src={image} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </Box>
        </Box>
    </div>
  )
}

export default ZoomDetail
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getReviewByProduct } from "../../redux/actions/reviewActions";
import styles from "./Reviews.module.css";
import ReviewsRemix from "./ReviewsRemix";

const Review = ({ id, name, image }) => {
  const dispatch = useDispatch();
  
 
  const [box, setBox] = useState(false);
  const handlePost = (e) => {
    e.preventDefault();
    setBox(!box);
  };

  const userLocal = JSON.parse(localStorage.getItem('auth0')) ?
  JSON.parse(localStorage.getItem('auth0'))
  : []
  const nuevoUserLoc = userLocal._id
 

  useEffect(() => {
    dispatch(getReviewByProduct(id));
  }, [dispatch]);
  return (
    <>
      
      {/* user?.admin === false && */ (
        <button
          className={styles.buttonReviewRemix}
          onClick={(e) => handlePost(e)}
        >
          Dejá tu review
        </button>
      )}
      {box === true && (
        <>
          <ReviewsRemix
            id={id}
            image={image}
            name={name}
            user={nuevoUserLoc}
            setBox={setBox}
          />
        </>
      )}
    </>
  );
};

export default Review;

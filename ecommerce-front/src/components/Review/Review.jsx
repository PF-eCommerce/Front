import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, /* useSelector */ } from "react-redux";
import { getReviewByProduct } from "../../redux/actions/reviewActions";
import { getAllUsers } from "../../redux/actions/userAction";
import styles from "./Reviews.module.css";
import ReviewsRemix from "./ReviewsRemix";

const Review = ({ id, name, image }) => {
  const dispatch = useDispatch();
  
  /* const reviewsByProduct = useSelector((state) => state.review.reviews);
  const allUsers = useSelector((state) => state.user?.users).map((u) => ({
    name: u?.username,
    id: u?._id,
  })); */
  const [box, setBox] = useState(false);
  const handlePost = (e) => {
    e.preventDefault();
    setBox(!box);
  };

  const userLocal = JSON.parse(localStorage.getItem('auth0'))
  const nuevoUserLoc = userLocal._id
  //console.log('localStorage:',localStorage.getItem('auth0'))
  //console.log('userLocal:', userLocal._id)
/* hastaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */
/* meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeennn enenen enenenenenne  */
  /* const userbyName = (uId) => {
    const userById = allUsers?.find((u) => u.id === uId);
    return userById?.name;
  }; */

  useEffect(() => {
    /* dispatch(getAllUsers()); */
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

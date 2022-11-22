import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/* import { getReviewByProduct } from "../../redux/actions/reviewActions"; */
import { getAllUsers } from "../../redux/actions/userAction";
import styles from "./Reviews.module.css";
import ReviewsRemix from "./ReviewsRemix";

const Reviews = ({ id, name, image }) => {
  const dispatch = useDispatch();
  /* const reviewsByProduct = useSelector((state) => state.review.reviews);
  const user = JSON.parse(localStorage.getItem("user"));
  const allUsers = useSelector((state) => state.user?.users).map((u) => ({
    name: u?.username,
    id: u?._id,
  })); */
  const [box, setBox] = useState(false);
  const handlePost = (e) => {
    e.preventDefault();
    setBox(!box);
  };
/*   const userbyName = (uId) => {
    const userById = allUsers?.find((u) => u.id === uId);
    return userById?.name;
  };
 */
  useEffect(() => {
    /* dispatch(getAllUsers()); */
    /* dispatch(getReviewByProduct(id)); */
  }, [dispatch]);
  return (
    <>
      {/* {reviewsByProduct ? (
        <details id="detalles" title="Reviews" className={styles.botónReview}>
          <summary id="reviewsDe" className={styles.summ}>
            Comentarios
          </summary>
          {reviewsByProduct?.map((r) => (
            <>
              <p
                className={styles.summUsuario}
                id={"usuarioEnReview" + r?.user}
              >
                {userbyName(r?.user)} :
              </p>
              <p
                className={styles.summComment}
                id={"commentEnReview" + r?.user}
              >
                {r?.comment}
              </p>
            </>
          ))}
        </details>
      ) : null} */}
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
            /* user={user} */
            setBox={setBox}
          />
        </>
      )}
    </>
  );
};

export default Reviews;

import React /*, { useEffect } */ from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/userAction";
import styles from "./Reviews.module.css";

function Comentarios({allUsers, reviewsByProduct}) {
    /* const dispatch = useDispatch(); */
    /* const reviewsByProduct = useSelector((state) => state.review.reviews);
    const allUsers = useSelector((state) => state.user?.users).map((u) => ({
    name: u?.username,
    id: u?._id,
    }));*/

    const userbyName = (uId) => {
        const userById = allUsers?.find((u) => u.id === uId);
        return userById?.name;
    };

    /* useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]); */

  return (
    <div>
        {reviewsByProduct ? (
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
      ) : <h1>Opps.. aun estan cargando</h1> }
    </div>
  )
}

export default Comentarios
import React from 'react';
import styles from "./Reviews.module.css";

function Comentarios({allUsers, reviewsByProduct}) {

  const userbyName = (uId) => {
      const userById = allUsers?.find((u) => u.id === uId);
      return userById?.name;
  };

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
                {/* console.log('userrrrrR:',r.user) */}
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
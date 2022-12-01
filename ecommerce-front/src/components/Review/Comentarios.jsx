import React from 'react';
import styles from "./Reviews.module.css";
import {
  ListItem,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";

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
            Reviews del Producto
          </summary>
          {reviewsByProduct?.map((r) => (
            <ListItem
              alignItems="flex-start"
              button
              key={r?.user + r?.id}
            >
              <ListItemText
                  primary={
                    <Typography
                        sx={{ display: "block" }}
                        component="span"
                        variant="body3"
                        color="goldenrod"
                        fontSize="18px"
                      >
                        {userbyName(r?.user) ? userbyName(r?.user) : <p>anonymus</p> }
                      </Typography>}
                  secondary={
                    <>
                      
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {r?.comment}
                      </Typography>
                    </>
                  }
                />
              <Rating
                name="Rating"
                value={r?.rating}
                readOnly
                size="small"
              />
              {/* <p
                className={styles.summComment}
                id={"commentEnReview" + r?.user}
              >
                {r?.comment}
              </p> */}
            </ListItem>
          ))}
        </details>
      ) : <h1>Opps.. aun estan cargando</h1> }
    </div>
  )
}

export default Comentarios
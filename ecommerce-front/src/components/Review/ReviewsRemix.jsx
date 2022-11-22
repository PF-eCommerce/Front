import s from "./ReviewsRemix.module.css";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { postReview } from "../../redux/actions/reviewActions";

export default function ReviewsRemix({ id, name, image, /* user, */ setBox }) {

  const [hoverStar, setHoverStar] = useState(undefined);
  const [error , /* setError */] = useState({})

  const dispatch = useDispatch();
  const [input, setInput] = useState({
    product: id,
    comment: "",
    rating: 0,
    userId: "63698e7e4b5027a58449ah6" /*localStorage.getItem(aut0) user._id, */,
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.comment.length >= 4 && input.rating >= 1  /* && user */) {
      dispatch(postReview(id, input));
      setBox(false)
      setInput({
        product: id,
        comment: "",
        rating: 0,
        userId: "63698e7e4b5027a58449ah6"/* user._id, */,
      });
      alert('Review completada!')
    } else {
      alert("Comentarios de mínimo 4 caracteres, y mínimo 1 estrella");
    }
  };

  /* product: id,
        rating: 0,
        comment: "",
        userId: */

  const handleText = () => {
    switch (input.rating || hoverStar) {
      case 0:
        return "Evaluar";
      case 1:
        return "Insatisfecho";
      case 2:
        return "Insatisfecho";
      case 3:
        return "Normal";
      case 4:
        return "Satisfecho";
      case 5:
        return "Muy Satisfecho";
      default:
        return "Evaluar";
    }
  };
  console.table('input:', input)
  const handlePlaceHolder = () => {
    switch (input.rating || hoverStar) {
      case 0:
        return "Comente aquí...";
      case 1:
      case 2:
      case 3:
      case 4:
        return "Cual fue su problema?";
      case 5:
        return "Por qué te gustó este producto?";
      default:
        return "Comente aquí...";
    }
  };

 /*  function validate(input){
    let error = {};
    if(!input.rating.length > 0){
        error.rating = 'Debes poner un puntaje de estrellas'
    }
    if(!input.comment.length >= 4){
        error.comment = '"Comentarios de mínimo 4 caracteres'
    }
    return error
  } */

  return (
    <form onSubmit={handleSubmit} className={s.AppReviews}>
      
      <div className={s.popupReviews}>
        <div className={s.contentReviews}>
          <div className={s.btnX} onClick={() => setBox(false)} >x</div>
          <div className={s.productReviews}>
            <img
              style={{ width: 60, height: 60, objectFit: "cover" }}
              src={image[0]}
              alt={name}
            />
            <h1 className={s.h1X}>{name}</h1>
          </div>
          <div>
            <h1 className={s.h1Num}>{handleText()}</h1>
            {Array(5)
              .fill()
              .map((_, index) =>
                input.rating >= index + 1 || hoverStar >= index + 1 ? (
                  <AiFillStar
                    onMouseOver={() => !input.rating && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setInput({ ...input, rating: index + 1 })}
                  />
                ) : (
                  <AiOutlineStar
                    onMouseOver={() => !input.rating && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setInput({ ...input, rating: index + 1 })}
                  />
                )
              )}
          </div>
          <textarea
            name="comment"
            value={input.comment}
            onChange={(e) => setInput({ ...input, comment: e.target.value })}
            placeholder={handlePlaceHolder()}
          ></textarea>
          {error.comment && <p className={s.p}>{error.comment}</p>}

          <button 
            type="submit"
            className={` ${!input.rating && s.disabled } `}
            /* disabled={Object.keys(error).length} */
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}
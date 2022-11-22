//Le pasás el número de caracter para cortar e insertar "..." y el string
export const formatLine = (index, string) => {
  if (string.length > index) {
    let part = string.slice(0, index);
    return part + "...";
  } else {
    return string;
  }
};

//import background from the assets folder in src
import background from "../../assets/background.png";

export const mainContainerStyle = {
  height: "75vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export const productContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "60vh",
  width: "50%",
  alignItems: "center",
  border: "1px solid black",
  borderRadius: "10px",
  backgroundColor: "hotPink",

  paddingBottom: "1rem",
};

export const backToProductsStyle = {
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
  fontSize: "1.5rem",
  border: "none",
  position: "absolute",
  top: "6rem",
  left: "1rem",
  width: "15rem",
};

export const backToHomeStyle = {
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
  fontSize: "1.5rem",
  border: "none",
  position: "absolute",
  top: "6rem",
  left: "18rem",
  width: "15rem",
};

export const imgStyle = {
  height: "400px",
  width: "100%",
  objectFit: "cover",
  objectPosition: "top",
  marginBottom: "1rem",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
};

export const descriptionStyle = {
  width: "100%",
  height: "auto",
  padding: "1rem",
  fontSize: "1.3rem",
  border: "none",
};

export const addToCartStyle = {
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
  fontSize: "1.5rem",
  border: "none",
};

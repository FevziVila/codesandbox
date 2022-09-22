import BackButton from "./Button";

export default function Screen({ image, children, back, bgColor }) {
  return (
    <div className="Screen">
      {image && <img className="background" src={image} alt="Screen" />}
      {back && <BackButton to={back} x="0" y="0" w="50" h="50" />}
      {children}
    </div>
  );
}

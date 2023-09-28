import tempImage from "../../../assets/images/picture2.png";
const Service = ({ image, service }) => {
  return (
    <div className="ServiceCard">
      <img src={image || tempImage} alt="" />
      <p>{service || "Electrician"}</p>
    </div>
  );
};

export default Service;

const DropDown = ({ texts, styles, imgLink }) => {
  return (
    <div className={styles}>
      <img src={imgLink} alt="" />
      <div className="" color="#333">
        {texts.map((text, id) => (
          <div className="notification-text" key={id}>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DropDown;

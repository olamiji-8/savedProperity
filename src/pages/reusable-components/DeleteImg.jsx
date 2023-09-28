import React, { useState } from "react";
import { serviceProviderImages } from "../../data/serviceProvider/serviceProviderImages";
import TrashMsg from "../dashboard/TrashMsg";

const DeleteImg = () => {
  const [serviceImages, setServiceImages] = useState(serviceProviderImages);
  const [trashMsg, setTrashMsg] = useState(false);

  const handleTrash = () => {
    setTrashMsg(!trashMsg);
  };
  const deleteImg = (id) => {
    const newImg = serviceImages.filter((sImg) => sImg.id !== id);
    setServiceImages(newImg);
    setTrashMsg(false);
  };
  const closeTrash = () => {
    setTrashMsg(false);
  };
  return (
    <div className="service-provider-extreme-bottom-container">
      {serviceImages.map((spimg) => {
        const { id, img } = spimg;
        return (
          <section key={id}>
            <div>
              {trashMsg && (
                <TrashMsg
                  deleteImg={deleteImg}
                  closeTrash={closeTrash}
                  id={id}
                  trashMsg={trashMsg}
                />
              )}
              <div className="service-provider-container-box">{img}</div>
              <img
                className="trash-img"
                src="/Service-Provider-Img-Icons/trashImg.png"
                alt="copy"
                onClick={() => handleTrash(id)}
              />
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default DeleteImg;

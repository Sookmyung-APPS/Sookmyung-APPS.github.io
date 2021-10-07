import { Figure, Modal } from "react-bootstrap";
import React, { useState } from "react";

function ImagePoster(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const iframeStyle = {
    width: "100%",
    height: "30vw",
  };

  return (
    <>
      <Figure>
        <Figure.Image
          alt="170x240"
          src={props.poster}
          onClick={handleShow}
          style={{ width: "16vw", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)" }}
        />
      </Figure>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <iframe
              style={iframeStyle}
              src={props.link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ImagePoster;

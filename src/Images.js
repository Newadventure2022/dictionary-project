import React from "react";
import "./Dictionary.css";

export default function Images(props) {
  if (props.image) {
    console.log(props.image);
    return (
      <div className="Photo">
        <div className="row">
          {props.image.map(function (image, index) {
            return (
              <div className="abc" key={index}>
                <a
                  href={image.src.original}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={image.src.portrait}
                    className="img-fluid rounded"
                    alt={image.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

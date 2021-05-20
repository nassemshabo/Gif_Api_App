import React from "react";

export default function GIf({ show, datas, sendData }) {
  return (
    <div className="gif" style={{ display: show ? "none" : "block" }}>
      <div className="gallery">
        {datas.map((data) => (
          <img
            key={data.images.original.url}
            onClick={sendData}
            src={data.images.original.url}
          />
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./styles.css";
import { faFrownOpen, faGrinBeam } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components
import Gif from "./Gif";

export default function App() {
  const [changeIcon, setChangeIcon] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(["hi"]);
  const [src, setSrc] = useState("");

  useEffect(() => {
    getData();
  }, [search]);

  async function getData() {
    const key = "HwlbNR9BlfWEicDyHkTWiVsF3QmSikK0";
    const limit = 52;
    const url = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`
    );
    const data = await url.json();

    setData(data.data);
  }

  function searchItem(e) {
    setSearch(e.target.value);
  }

  function sendData(e) {
    setSrc(e.target.src);
    setChangeIcon(!changeIcon);
  }

  return (
    <div className="App">
      <Gif show={changeIcon} datas={data} sendData={sendData} />
      <img
        className="img-chat"
        src={
          src === ""
            ? "https://media0.giphy.com/media/3o72EU9LwBW3j47eqk/giphy.gif"
            : src
        }
      />
      <div className="search-div">
        <input onChange={searchItem} className="search" />
        <FontAwesomeIcon
          onClick={() => setChangeIcon(!changeIcon)}
          className="icon"
          icon={changeIcon ? faFrownOpen : faGrinBeam}
        />
      </div>
    </div>
  );
}

/* 




*/

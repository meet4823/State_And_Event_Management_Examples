import React from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import b from "../Components/bb.jpg";
import "./ListN.css";
function StatePage() {
  const handle = useFullScreenHandle();

  return (

    <div id="state">
      <p>2. State Changes to FullScreen with onClick event Handler</p>
      <button onClick={handle.enter}>
        Enter fullscreen
      </button>

      <FullScreen handle={handle}>
      <img src={b} alt="band" />
      </FullScreen>
    </div>
  );
}

export default StatePage;
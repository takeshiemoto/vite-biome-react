import { useState } from "react";
import "./App.css";
import { AttachEventHandler } from "./components/AttachEventHandler.tsx";

function App() {
  const [isShow, setIsShow] = useState(false);
  const handleOpenButtonClick = () => {
    setIsShow(true);
  };

  const handleCloseButtonClick = () => {
    setIsShow(false);
  };

  return (
    <>
      <button type={"button"} onClick={handleOpenButtonClick}>
        Show Modal Area
      </button>

      <button type={"button"} onClick={handleCloseButtonClick}>
        Close Modal Area
      </button>

      {isShow && <AttachEventHandler />}
    </>
  );
}

export default App;

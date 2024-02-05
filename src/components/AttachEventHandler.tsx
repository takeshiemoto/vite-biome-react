import { useEffect, useState } from "react";

export const AttachEventHandler = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      switch (e.key) {
        case "Escape":
          setIsOpen(false);
          break;
        default:
          break;
      }
    };

    console.log("attach event handler");
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      console.log("cleanup");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <div>
          <h2>Modal</h2>
          <p>Modal content .</p>
        </div>
      )}
      <button type={"button"} onClick={handleButtonClick}>
        Open Modal
      </button>
    </>
  );
};

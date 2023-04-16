import { useEffect } from "react";
import "./Modal.module.css";
import ReactPortal from "./ReactPortal";

function Modal({ children, isOpen, handleClose }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] mt-72 flex h-96 scale-90 flex-col justify-center rounded-xl bg-gray-800 align-middle transition-all md:ml-96 md:w-1/2 md:px-8 md:py-8">
      <button
        onClick={handleClose}
        className="align-end  mr-4 flex justify-end text-white  md:mt-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
      <div className="">{children}</div>
    </div>
  );
}

export default Modal;

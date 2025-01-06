import React, { useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

const Modal = ({ children, open, onClose }) => {
  const ref = useRef(null);

  useOutsideClick(ref, onClose);

  if (!open) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div
          ref={ref}
          className="bg-gray-800 shadow-md  rounded-2xl  overflow-hidden p-4 text-white relative"
        >
          <div className="pt-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

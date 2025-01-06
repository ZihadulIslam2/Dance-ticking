import { useEffect } from "react";

// Custom hook to track outside click
function useOutsideClick(ref, callback) {
  useEffect(() => {
    // Function to handle clicks outside the ref element
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    // Add event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useOutsideClick;

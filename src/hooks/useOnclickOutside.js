import { useEffect } from "react";

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    // define the listener function to be called on click/touch events
    const listener = (event) => {
      // If the click/touch event originated inside the ref element, do nothing
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      //otherwise , call the provided handler function
      handler(event);
    };

    //Add event listener for mouseDown and touchStart events on the document
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup function to remove the event listener when the component unmounts or when the ref/handler dependencies change
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

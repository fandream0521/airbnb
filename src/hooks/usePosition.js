import { useEffect, useState } from "react";

export default function usePosition() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  function updatePosition() {
    setPosition({
      x: window.scrollX,
      y: window.scrollY,
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  })

  return position
}
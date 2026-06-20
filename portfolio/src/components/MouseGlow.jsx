import { useEffect, useState } from "react";

function MouseGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="
          absolute
          w-10
          h-10
          rounded-full
          bg-orange-500
          opacity-20
          blur-xl
          transition-all
          duration-150
        "
        style={{
          left: position.x - 20,
          top: position.y - 20,
        }}
      />
    </div>
  );
}

export default MouseGlow;
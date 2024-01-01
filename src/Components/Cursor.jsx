import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouse);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  const cursorSize = 90;

  return (
    <motion.div
      style={{
        backgroundColor: '#FF5F38',
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        borderRadius: '50%',
        position: 'fixed',
        top: `${position.y - cursorSize / 2  }px`,
        left: `${position.x - cursorSize / 2 }px`,
        pointerEvents: 'none',
        zIndex: '10',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 400,
      }}
    >
      Play Reel
    </motion.div>
  );
}

export default Cursor;

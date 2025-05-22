// components/FunctionalTimer.js
import React, { useState, useEffect } from 'react';

const FunctionalTimer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>Functional Timer: {seconds}s</div>;
};

export default FunctionalTimer;
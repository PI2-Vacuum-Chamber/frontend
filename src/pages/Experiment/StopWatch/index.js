import React, { useEffect, useState, useMemo } from 'react';

import { TimeText } from './styles';

const StopWatch = ({ increment }) => {
  const [stopwatch, setStopwatch] = useState(0);

  useEffect(() => {
    increment.current = setInterval(() => {
      setStopwatch(timer => timer + 1);
    }, 1000);

    return () => clearInterval(increment.current);
  }, []);

  const formatTime = useMemo(() => {
    const getSeconds = `0${stopwatch % 60}`.slice(-2);
    const minutes = `${Math.floor(stopwatch / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(stopwatch / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  }, [stopwatch]);

  return <TimeText>{formatTime}</TimeText>;
};

export default StopWatch;

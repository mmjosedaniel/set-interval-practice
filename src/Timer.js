import { useEffect, useState } from "react";

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{"Current time: " + currentTime}</div>;
};

export default Timer;

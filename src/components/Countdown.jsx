import { useState, useEffect } from "react";

export default function Countdown({ targetDateTime, onComplete }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDateTime) - +new Date();
    if (difference <= 0) return null;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
      if (!updated) {
        clearInterval(timer);
        if (onComplete) onComplete(); // Call the parent callback
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDateTime, onComplete]);

  if (timeLeft) {
    return (
      <div>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </div>
    );
  }
}

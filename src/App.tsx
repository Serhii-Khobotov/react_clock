import React from 'react';
import { useEffect } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

export const App: React.FC = () => {
  const [hasClock, setHasClock] = React.useState(true);

  const handleShowClock = () => {
    setHasClock(true);
  };

  const handleHideClock = (e: MouseEvent) => {
    e.preventDefault();

    setHasClock(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleShowClock);
    document.addEventListener('contextmenu', handleHideClock);

    return () => {
      document.removeEventListener('click', handleShowClock);
      document.removeEventListener('contextmenu', handleHideClock);
    };
  }, [hasClock]);

  return (
    <div className="App">
      <h1>React clock</h1>

      {hasClock && <Clock />}
    </div>
  );
};

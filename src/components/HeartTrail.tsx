import { useEffect, useRef, JSX } from 'react';
import '../App.css';

function HeartTrail(): JSX.Element | null {
  // useRef is used to create a reference that holds a function for handling mouse move events
  const handleMouseMoveRef = useRef<(event: MouseEvent) => void | null>(null);

  useEffect(function setupMouseMoveListener() {
    handleMouseMoveRef.current = function handleMouseMoveEvent(event: MouseEvent) {
      createHeart(event);
    };

    function handleMouseMove(event: MouseEvent) {
      if (handleMouseMoveRef.current) {
        handleMouseMoveRef.current(event);
      }
    }

    document.body.addEventListener('mousemove', handleMouseMove);

    return function cleanupMouseMoveListener() {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  function createHeart(event: MouseEvent) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';

    // Position the heart based on mouse coordinates
    heart.style.left = `${event.pageX - 10}px`; // Adjust the heart to center the cursor
    heart.style.top = `${event.pageY - 10}px`;

    document.body.appendChild(heart);

    // Remove the heart after animation
    setTimeout(function removeHeart() {
      heart.remove();
    }, 1000); // 1 second (same as CSS animation time)
  }

  return null;
}

export default HeartTrail;
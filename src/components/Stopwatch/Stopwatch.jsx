// Imports
// useState → component ke data/state ko store aur update karne ke liye
// useEffect → side effects handle karne ke liye

import { useState, useEffect } from "react";

// CSS import
// Stopwatch.css ki styling component par apply hoti hai
import "./Stopwatch.css";


// Component
// Stopwatch naam ka React functional component
function Stopwatch() {

  // Seconds state
  // seconds → current seconds ki value
  // setSeconds → seconds ko update karne ka function
  const [seconds, setSeconds] = useState(0);


  // Minutes state
  // minutes → current minutes ki value
  // setMinutes → minutes ko update karne ka function
  const [minutes, setMinutes] = useState(0);


  // Hours state
  // hours → current hours ki value
  // setHours → hours ko update karne ka function
  const [hours, setHours] = useState(0);


  // Running state
  // running → batata hai stopwatch chal raha hai ya nahi
  // Initially false hai, yani stopwatch stopped hai
  const [running, setRunning] = useState(false);


  // useEffect
  // Jab running true hoga, timer start hoga
  useEffect(() => {

    // Agar stopwatch nahi chal raha
    // to timer start nahi hoga
    if (!running) {
      return;
    }


    // setInterval
    // Har 1 second baad ye code execute hoga
    const timer = setInterval(() => {


      // Seconds update
      // prevSeconds → seconds ki previous/current value
      setSeconds((prevSeconds) => {


        // Check karta hai ke seconds 59 ho gaye hain ya nahi
        if (prevSeconds === 59) {


          // Seconds 59 ke baad minutes increase honge
          setMinutes((prevMinutes) => {


            // Agar minutes bhi 59 hain
            // to next hour start hoga
            if (prevMinutes === 59) {

              // Hours ko 1 increase karta hai
              setHours((prevHours) => prevHours + 1);

              // Minutes ko 0 karta hai
              return 0;
            }


            // Minutes ko 1 increase karta hai
            return prevMinutes + 1;
          });


          // Seconds ko 0 karta hai
          return 0;
        }


        // Agar seconds 59 nahi hain
        // to seconds ko 1 increase karta hai
        return prevSeconds + 1;

      });

    }, 1000); // 1000 milliseconds = 1 second


    // Cleanup function
    // Effect ke cleanup par interval ko stop karta hai
    return () => {
      clearInterval(timer);
    };


  }, [running]); // running change hone par useEffect dobara run hoga


  // Start button ka function
  function startTimer() {
    setRunning(true);
  }


  // Stop button ka function
  function stopTimer() {
    setRunning(false);
  }


  // Reset button ka function
  function resetTimer() {

    // Stopwatch ko stop karta hai
    setRunning(false);

    // Seconds ko 0 karta hai
    setSeconds(0);

    // Minutes ko 0 karta hai
    setMinutes(0);

    // Hours ko 0 karta hai
    setHours(0);
  }


  // padStart(2, "0") single digit ke start mein 0 add karta hai
  // Example: 5 → 05
  const h = String(hours).padStart(2, "0");
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");


  // JSX / UI
  return (
    <div className="container">

      <h1>Stopwatch</h1>

      {/* Stopwatch ka time display */}
      <div id="display">
        {h}:{m}:{s}
      </div>

      {/* Buttons container */}
      <div className="buttons">

        {/* Start button */}
        {/* onClick par startTimer function chalega */}
        <button onClick={startTimer}>
          Start
        </button>

        {/* Stop button */}
        {/* onClick par stopTimer function chalega */}
        <button onClick={stopTimer}>
          Stop
        </button>

        {/* Reset button */}
        {/* onClick par resetTimer function chalega */}
        <button onClick={resetTimer}>
          Reset
        </button>

      </div>

    </div>
  );
}


// Stopwatch component ko export kar rahe hain
// Taake App.jsx mein import kar saken
export default Stopwatch;
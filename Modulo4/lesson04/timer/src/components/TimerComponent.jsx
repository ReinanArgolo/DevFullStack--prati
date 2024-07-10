import { useState, useEffect } from 'react';
import css from './TimerComponent.module.css'


function TimerComponent() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const handleTimesChange = () => {
        const min = document.getElementById('min').value;
        const sec = document.getElementById('sec').value;

        setMinutes(parseInt(min));
        setSeconds(parseInt(sec));

        startTimer()
    };

    const startTimer = () => {
        setIsActive(true);
    };

    const pauseAndPlayTimer = () => {
        if(isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };


    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval);
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds, minutes]);

    return (
        <>
            <div className={css.container}>

                <h1 className={css.title}>Timer</h1>
                
                <div className={css.timer}>

                    {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    
                </div>

                
                <div>
                    <input type="number" placeholder='Minutos' id='min'  className={css.input}/>
                    <input type="number" placeholder='Segundos' id='sec' className={css.input}/>
                </div>
                

                <div>
                    <button className={css.btn} onClick={handleTimesChange}>Start</button>
                    <button className={css.btn} onClick={pauseAndPlayTimer}>{isActive ? 'Pause' : 'Resume'}</button>
                </div>

            </div>
        </>
    )


} export default TimerComponent
import React, { useState, useEffect, useRef } from 'react';
import { TweenMax, Quart } from 'gsap';

const Countdown = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const totalSecondsRef = useRef(0);
    const countdownIntervalRef:any = useRef(null);

    const hoursRef:any = useRef([]);
    const minutesRef:any = useRef([]);
    const secondsRef:any = useRef([]);

    useEffect(() => {
        // Initialize values
        const initHours = 1; // set initial hours here
        const initMinutes = 30; // set initial minutes here
        const initSeconds = 0; // set initial seconds here

        setHours(initHours);
        setMinutes(initMinutes);
        setSeconds(initSeconds);

        totalSecondsRef.current = initHours * 3600 + initMinutes * 60 + initSeconds;

        countdownIntervalRef.current = setInterval(count, 1000);

        return () => clearInterval(countdownIntervalRef.current);
    }, []);

    const count = () => {
        if (totalSecondsRef.current > 0) {
            let newSeconds = seconds - 1;
            let newMinutes = minutes;
            let newHours = hours;

            if (newSeconds < 0) {
                newSeconds = 59;
                newMinutes -= 1;
            }

            if (newMinutes < 0) {
                newMinutes = 59;
                newHours -= 1;
            }

            setSeconds(newSeconds);
            setMinutes(newMinutes);
            setHours(newHours);

            totalSecondsRef.current -= 1;
        } else {
            clearInterval(countdownIntervalRef.current);
        }

        // Animate the figures
        animateFigure(secondsRef.current[0], Math.floor(seconds / 10));
        animateFigure(secondsRef.current[1], seconds % 10);
        animateFigure(minutesRef.current[0], Math.floor(minutes / 10));
        animateFigure(minutesRef.current[1], minutes % 10);
        animateFigure(hoursRef.current[0], Math.floor(hours / 10));
        animateFigure(hoursRef.current[1], hours % 10);
    };

    const animateFigure = (el:any, value:any) => {
        const top = el.querySelector('.top');
        const bottom = el.querySelector('.bottom');
        const backTop = el.querySelector('.top-back');
        const backBottom = el.querySelector('.bottom-back');

        backTop.querySelector('span').innerHTML = value;
        backBottom.querySelector('span').innerHTML = value;

        TweenMax.to(top, 0.8, {
            rotationX: '-180deg',
            transformPerspective: 300,
            ease: Quart.easeOut,
            onComplete: function () {
                top.innerHTML = value;
                bottom.innerHTML = value;
                TweenMax.set(top, { rotationX: 0 });
            }
        });

        TweenMax.to(backTop, 0.8, {
            rotationX: 0,
            transformPerspective: 300,
            ease: Quart.easeOut,
            clearProps: 'all'
        });
    };

    return (
        <div className="countdown">
            <div className="bloc-time hours">
                <div className="figure" ref={el => hoursRef.current[0] = el}>
                    <div className="top">0</div>
                    <div className="top-back"><span>0</span></div>
                    <div className="bottom">0</div>
                    <div className="bottom-back"><span>0</span></div>
                </div>
                <div className="figure" ref={el => hoursRef.current[1] = el}>
                    <div className="top">0</div>
                    <div className="top-back"><span>0</span></div>
                    <div className="bottom">0</div>
                    <div className="bottom-back"><span>0</span></div>
                </div>
            </div>
            <div className="bloc-time min">
                <div className="figure" ref={el => minutesRef.current[0] = el}>
                    <div className="top">0</div>
                    <div className="top-back"><span>0</span></div>
                    <div className="bottom">0</div>
                    <div className="bottom-back"><span>0</span></div>
                </div>
                <div className="figure" ref={el => minutesRef.current[1] = el}>
                    <div className="top">0</div>
                    <div className="top-back"><span>0</span></div>
                    <div className="bottom">0</div>
                    <div className="bottom-back"><span>0</span></div>
                </div>
            </div>
            <div className="bloc-time sec">
                <div className="figure" ref={el => secondsRef.current[0] = el}>
                    <div className="top">0</div>
                    <div className="top-back"><span>0</span></div>
                    <div className="bottom">0</div>
                    <div className="bottom-back"><span>0</span></div>
                </div>
                <div className="figure" ref={el => secondsRef.current[1] = el}>
                    <div className="top">0</div>
                    <div className="top-back"><span>0</span></div>
                    <div className="bottom">0</div>
                    <div className="bottom-back"><span>0</span></div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;

import React, { useState, useEffect } from 'react';
// https://3d-countdown.netlify.app/
function CountDown() {

    // * To flip all card
    const flipAllCards = (time:any) => {
        // console.log("time", time)
        // * Breaking the time into sec, min, hours
        const seconds = Math.floor(time % 60);
        const minutes = Math.floor(time / 60) % 60;
        const hours = Math.floor(time / 3600 );
        const days = Math.floor(time / 86400);

        flip(document.querySelector("[data-days-ones]"), days)
        flip(document.querySelector("[data-hours-ones]"), hours)
        flip(document.querySelector("[data-minutes-ones]"), minutes)
        flip(document.querySelector("[data-seconds-ones]"), seconds)
    }

    // * call to flip single card
    const flip = (flipCard:any, newNumber:any) => {
        const top = flipCard.querySelector('.top')
        const bottom = flipCard.querySelector('.bottom')
        const startNumber = flipCard.querySelector('.top').textContent;

        // ! it will check if your past value is same as newvalue it will return;
        if (newNumber == startNumber) return;

        top.textContent = startNumber;
        bottom.textContent = startNumber;
        flipCard.dataset.currentNumber = newNumber;
        flipCard.dataset.nextNumber = newNumber;

        flipCard.addEventListener('animationstart', () => {
            top.textContent = newNumber;
        })

        flipCard.addEventListener('animationend', () => {
            bottom.textContent = newNumber;
            flipCard.classList.remove('flip');
        })

        flipCard.classList.add('flip')
    }

    useEffect(() => {
        const startTime = new Date().setHours(new Date().getHours() + 24);
        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            var totalCountDownTime = Math.ceil((startTime - currentTime) / 1000);
            if(totalCountDownTime === 0) clearInterval(interval)
            flipAllCards(totalCountDownTime)
        }, 1000)

        // * Cleanup function
        return () => {
            clearInterval(interval)
        }
    }, []);

    return (
        <div className="countdown-aniamtion">
            <div className="countdown-container">
                <div className="countdown-cards">
                    <div className='card-title'>Days</div>
                    <div className='card-container' >
                        <div className="flip-card" data-days-ones>
                            <div className="top">31</div>
                            <div className="bottom">31</div>
                        </div>
                    </div>
                </div>
                <div className="countdown-cards">
                    <div className='card-title'>Hours</div>
                    <div className='card-container' >
                        <div className="flip-card" data-hours-ones>
                            <div className="top">24</div>
                            <div className="bottom">24</div>
                        </div>
                    </div>
                </div>
                <div className="countdown-cards">
                    <div className='card-title'>Minutes</div>
                    <div className='card-container'>
                        <div className="flip-card" data-minutes-ones>
                            <div className="top">60</div>
                            <div className="bottom">60</div>
                        </div>
                    </div>
                </div>
                <div className="countdown-cards">
                    <div className='card-title'>Seconds</div>
                    <div className='card-container'>
                        <div className="flip-card" data-seconds-ones>
                            <div className="top">60</div>
                            <div className="bottom">60</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CountDown


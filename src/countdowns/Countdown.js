import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { addDays, intervalToDuration, compareAsc, addSeconds } from 'date-fns';
import Card from './Card'


const GlobalStyle = createGlobalStyle`
:root {
  --blue: hsl(237, 18%, 59%);
  --red: hsl(345, 95%, 68%);
  --white: hsl(0, 0%, 100%);
  --dark-blue-1: hsl(236, 21%, 26%);
  --dark-blue-2: hsl(235, 16%, 14%);
  --dark-blue-3: hsl(234, 17%, 12%);

  --bp-large: 100.375em;
}

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 87.5%;
  font-family: Montserrat-Regular;
  box-sizing: border-box;

  @media screen and (max-width: 59.375em) {
    font-size: 50%;
  }

  @media screen and (max-width: 37.5em) {
    font-size: 25%;
  }
}
`;


const Main = styled.main`
  display: flex;
  justify-content: center;
  gap: 21px;
`;

const CountdownMain = () => {
    const [targetTime] = useState(addDays(new Date(), 15));
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => setCurrentTime(time => addSeconds(time, 0)), []); //if finished

    useEffect(() => {
        const intvervalId = setInterval(() => {
            if (compareAsc(currentTime, targetTime) >= 0) return;

            setCurrentTime(addSeconds(currentTime, 1));
        }, 1000);
        return () => clearInterval(intvervalId);
    }, [currentTime, targetTime]);

    const { days, hours, minutes, seconds } = intervalToDuration({
        start: currentTime,
        end: targetTime,
    });
    const nextDays = days > 0 ? days - 1 : 0;
    const nextHours = hours > 0 ? hours - 1 : days > 0 ? 23 : 0;
    const nextMinutes = minutes > 0 ? minutes - 1 : days > 0 || hours > 0 ? 59 : 0;
    const nextSeconds = seconds > 0 ? seconds - 1 : days > 0 || hours > 0 || minutes > 0 ? 59 : 0;

    return (
        <>
            <GlobalStyle />

            <Main>
                <Card currentNumber={days} nextNumber={nextDays} title="days" />
                <Card currentNumber={hours} nextNumber={nextHours} title="hours" />
                <Card currentNumber={minutes} nextNumber={nextMinutes} title="minutes" />
                <Card currentNumber={seconds} nextNumber={nextSeconds} title="seconds" />
            </Main>

        </>
    );
};

export default CountdownMain;

import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { addDays, intervalToDuration, compareAsc, addSeconds } from 'date-fns';
import CardSmall from "./CardSmall";


const GlobalStyle = createGlobalStyle`
:root {
  --blue: hsl(237, 18%, 59%);
  --red: hsl(345, 95%, 68%);
  --white: hsl(0, 0%, 100%);
  --dark-blue-1: hsl(236, 21%, 26%);
  --dark-blue-2: hsl(235, 16%, 14%);
  --dark-blue-3: hsl(234, 17%, 12%);

  --bp-large: 59.375em;
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
  font-family: 'Red Hat Text', sans-serif;
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
  gap: 12px;
`;

const CountdownSmall = () => {
    const [targetTime] = useState(addDays(new Date(1721426872 * 1000),7));
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => setCurrentTime(time => addSeconds(time, 0)), []); //if finished

    useEffect(() => {
        const intvervalId = setInterval(() => {
            if (compareAsc(currentTime, targetTime) >= 0) return;

            setCurrentTime(addSeconds(currentTime, 1));
        }, 1000);
        return () => clearInterval(intvervalId);
    }, [currentTime, targetTime]);

    let { days, hours, minutes, seconds } = intervalToDuration({
        start: currentTime,
        end: targetTime,
    });
    const nextDays = days > 0 ? days - 1 : 0;
    const nextHours = hours > 0 ? hours - 1 : days > 0 ? 23 : 0;
    const nextMinutes = minutes > 0 ? minutes - 1 : days > 0 || hours > 0 ? 59 : 0;
    const nextSeconds = seconds > 0 ? seconds - 1 : days > 0 || hours > 0 || minutes > 0 ? 59 : 0;


    if (seconds === undefined) {
        seconds = 0
    }
    if (minutes === undefined) {
        minutes = 0
    }
    if (hours === undefined) {
        hours = 0
    }
    if (days === undefined) {
        days = 0
    }
    return (
        <>
            <GlobalStyle />

            <Main>
                <CardSmall currentNumber={days} nextNumber={nextDays} title="days" />
                <CardSmall currentNumber={hours} nextNumber={nextHours} title="hours" />
                <CardSmall currentNumber={minutes} nextNumber={nextMinutes} title="minutes" />
                <CardSmall currentNumber={seconds} nextNumber={nextSeconds} title="seconds" />
            </Main>

        </>
    );
};

export default CountdownSmall;

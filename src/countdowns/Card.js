/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './animation.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  align-items: center;
  width: 170px;
  height: 170px;
  //flex-shrink: 0;

  @media screen and (max-width: 37.5em) {
    width: 14rem;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  position: absolute;
  z-index: 555555;
  margin-top: 14px;
  font-family: Montserrat-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: linear-gradient(30deg, #75030B 18.3%, #930210 39.43%, #B4001E 60.57%, #DA291C 81.7%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Cards = styled.div`
  position: relative;
  perspective: 300px;
  height: 170px;
  width: 100%;
  box-shadow: 1px 6px 13.4px 0px rgba(0, 0, 0, 0.13);
  border-radius: 15px;

  @media screen and (max-width: 37.5em) {
    border-radius: 5px;
  }
`;

const circleSize = 1;

const StaticCard = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  height: 50%;
  width: 100%;
  position: relative;
  border-radius: 0 0 20px 20px;
  background: linear-gradient(180deg, #F2F2F2 0%, #CCC 100%);

  &::before,
  &::after {
    // content: '';
    // position: absolute;
    // height: ${circleSize}rem;
    // width: ${circleSize}rem;
    // border-radius: 50%;
    //background-color: black;
  }

  span {
    font-size: 104px;
    background: linear-gradient(30deg, #75030B 18.3%, #930210 39.43%, #B4001E 60.57%, #DA291C 81.7%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Roboto Mono";
  }
`;

const UpperStaticCard = styled(StaticCard)`
  align-items: flex-end;
  //border-bottom: 0.2px solid #FFFFFF;
  border-radius: 20px 20px 0px 0px;
  background: linear-gradient(180deg, #FAFAFA 0%, #E2E2E2 100%);

  &::before {
    bottom: -${circleSize / 2}rem;
    left: -${circleSize / 2}rem;
  }

  &::after {
    bottom: -${circleSize / 2}rem;
    right: -${circleSize / 2}rem;
  }

  span {
    transform: translateY(50%);
    filter: brightness(0.85);
  }

  @media screen and (max-width: 37.5em) {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

const LowerStaticCard = styled(StaticCard)`
  border-radius: 0 0 20px 20px;
  align-items: flex-start;
  border-top: 1px solid #FFFFFF;

  &::before {
    top: -${circleSize / 2}rem;
    left: -${circleSize / 2}rem;
  }

  &::after {
    top: -${circleSize / 2}rem;
    right: -${circleSize / 2}rem;
  }

  span {
    transform: translateY(-50%);
  }

  @media screen and (max-width: 37.5em) {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const FrontFlipCard = styled(UpperStaticCard)`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  transform-origin: bottom;
`;

const BackFlipCard = styled(LowerStaticCard)`
  backface-visibility: hidden;
  position: absolute;
  bottom: 0;
  transform-origin: top;
  transform: rotateX(180deg);
`;

const Card = ({ currentNumber, nextNumber, title }) => {
    const [[current, next], setNumber] = useState([currentNumber, nextNumber]);
    const [isAnimated, setIsAnimated] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const toString = num => {
        return ('0' + num?.toString(10)).slice(-2);
    };

    const onAnimationEnd = () => {
        setIsAnimated(false);
        setNumber([currentNumber, nextNumber]);
    };

    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }
        setIsAnimated(true);
    }, [currentNumber, nextNumber]);

    return (
        <Container>
            <Title>{title}</Title>
            <Cards>
                <UpperStaticCard>
                    <span>{toString(next)}</span>
                </UpperStaticCard>
                <LowerStaticCard>
                    <span>{toString(current)}</span>
                </LowerStaticCard>
                <FrontFlipCard className={isAnimated ? 'fold' : ''} onAnimationEnd={onAnimationEnd}>
                    <span>{toString(current)}</span>
                </FrontFlipCard>
                <BackFlipCard className={isAnimated ? 'unfold' : ''}>
                    <span>{toString(next)}</span>
                </BackFlipCard>
            </Cards>

        </Container>
    );
};

export default Card;

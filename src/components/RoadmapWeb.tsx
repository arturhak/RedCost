import React, { useEffect, useState } from "react";
import RoadmapDot from "../assets/icons/roadmap-dot.svg"

// function swap() {



//   const elementFirst = document.getElementById("first");
//   if (elementFirst) {
//     // Trigger the transition by adding the 'move' class
//     elementFirst.classList.add("moveLeft");
//   }

//   const elementSecond = document.getElementById("second");
//   if (elementSecond) {
//     // Trigger the transition by adding the 'move' class
//     elementSecond.classList.add("moveStart");
//   }

//   const elementThird = document.getElementById("third");
//   if (elementThird) {
//     // Trigger the transition by adding the 'move' class
//     elementThird.classList.add("move");
//   }

//   const elementForth = document.getElementById("fourth");
//   if (elementForth) {
//     // Trigger the transition by adding the 'move' class
//     elementForth.classList.add("moveRight");
//   }


//   const elementFourth = document.getElementById("forth");
//   if (elementFourth) {
//     // Trigger the transition by adding the 'move' class
//     elementFourth.classList.add("moveRight");
//   }

//   const elementFifth = document.getElementById("fifth");
//   if (elementFifth) {
//     // Trigger the transition by adding the 'move' class
//     elementFifth.classList.add("moveDown");
//   }
// }

function RoadmapWeb() {

  const [roadmapContent, setRoadmapContent] = useState([
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
  ]);

  const [animClass, setAnimClass] = useState([
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
  ]);

  const [blockId] = useState([
    "roadmapFirstBlock",
    "roadmapSecondBlock",
    "roadmapThirdlock",
    "roadmapFourthBlock",
    "roadmapFifthBlock",
  ]);

  const [title] = useState([
    "JUNE",
    "DECEMBER",
    "JANUARY",
    "MARCH",
    "FEBRUARY",
  ]);

  
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count updated:", count);
    updateDomClasses();
  }, [animClass, count]);

  function Next() {
    setAnimClass(prevAnimClass => {
      let newAnimClass = [...prevAnimClass];
      let firstElement: any = newAnimClass.shift(); // Remove the first element
      newAnimClass.push(firstElement); // Add it to the end
      return newAnimClass; // Return the new array
    });

    setCount(prevCount => prevCount + 1); // Functional update to ensure the correct value
  }

  function animPrev() {
    setAnimClass(prevAnimClass => {
      let newAnimClass = [...prevAnimClass];
      let lastElement: any = newAnimClass.pop(); // Remove the last element
      newAnimClass.unshift(lastElement); // Add it to the beginning
      return newAnimClass; // Return the new array
    });

    setCount(prevCount => prevCount - 1); // Functional update to ensure the correct value
  }

  function updateDomClasses() {
    for (let index = 0; index < roadmapContent.length; index++) {
      let element = document.getElementById(blockId[index]);
      if (element) {
        roadmapContent.forEach(cls => element?.classList.remove(cls)); // Remove all possible classes
        element.classList.add(animClass[index]); // Add the new class
      }
    }
  }



  return (
    <>
      <div className="security-component-header">
        <div className="line_1"></div>
        <div className="security-component-title">check our</div>
      </div>
      <div className="subtitle">Roadmap</div>

      <div className="roadmapBlocLine">
        <img className="roadmapCircle" src={RoadmapDot} alt="" />
      </div>
      <div className="line_vertical">
        <img className="roadmapCircleVertical" src={RoadmapDot} alt="" />
      </div>

      <img className="roadmapCircleVerticalSecondToThird" src={RoadmapDot} alt="" />

      <div className="line_third_to_fifth"></div>
      <img className="roadmapCircleVerticalThirdToFifth" src={RoadmapDot} alt="" />
      <div className="line_fifth_to_fourth"></div>
      <img className="roadmapCircleVerticalFifth" src={RoadmapDot} alt="" />
      {/* <div className="line_next"></div> */}
      {/* <span className="right_arrow"></span> */}
      <svg className="line_next" xmlns="http://www.w3.org/2000/svg" width="147" height="9" viewBox="0 0 147 9" fill="none">
        <path d="M146.354 4.85357C146.549 4.6583 146.549 4.34172 146.354 4.14646L143.172 0.964479C142.976 0.769216 142.66 0.769216 142.464 0.964479C142.269 1.15974 142.269 1.47632 142.464 1.67159L145.293 4.50001L142.464 7.32844C142.269 7.5237 142.269 7.84028 142.464 8.03555C142.66 8.23081 142.976 8.23081 143.172 8.03555L146.354 4.85357ZM-4.37114e-08 5L146 5.00001L146 4.00001L4.37114e-08 4L-4.37114e-08 5Z" fill="url(#paint0_linear_71_2238)" />
        <defs>
          <linearGradient id="paint0_linear_71_2238" x1="9.78919" y1="5.25" x2="9.79314" y2="4.25002" gradientUnits="userSpaceOnUse">
            <stop stop-color="#75030B" />
            <stop offset="0.333333" stop-color="#930210" />
            <stop offset="0.666667" stop-color="#B4001E" />
            <stop offset="1" stop-color="#DA291C" />
          </linearGradient>
        </defs>
      </svg>

      <span className="roadmapNextBtn" onClick={Next}>NEXT</span>


      {roadmapContent.map((el, index) => (
        <div key={index} id={blockId[index]} className={animClass[index]}>
          <span className="roadmapTitle">
            {title[index]}
            <span className="smTitleRoadmap"> /2023</span>
          </span>
        </div>
      ))}

    </>
  )
}

export default RoadmapWeb
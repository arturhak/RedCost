import React, { useEffect, useState } from "react";

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
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
  ]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count updated:", count);
    updateDomClasses();
  }, [animClass, count]);

  function anim() {
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
    <div className="roadmapWeb">
      <button onClick={anim}>NEXT</button>
      <button onClick={animPrev}>PREV</button>
      {roadmapContent.map((el, index) => (
        <div key={index} id={blockId[index]} className={animClass[index]}>
          <span className="roadmapTitle">
            JUNE/2023
          </span>
        </div>
      ))}
    </div>
  );
}

export default RoadmapWeb;

import React, { useState } from "react";



function swap() {
  const elementFirst = document.getElementById("first");
    if (elementFirst) {
      // Trigger the transition by adding the 'move' class
      elementFirst.classList.add("moveLeft");
    }

    const elementSecond = document.getElementById("second");
    if (elementSecond) {
      // Trigger the transition by adding the 'move' class
      elementSecond.classList.add("moveStart");
    }
   
    const elementThird = document.getElementById("third");
    if (elementThird) {
      // Trigger the transition by adding the 'move' class
      elementThird.classList.add("move");
    }

    const elementForth = document.getElementById("fourth");
    if (elementForth) {
      // Trigger the transition by adding the 'move' class
      elementForth.classList.add("moveRight");
    }


    const elementFourth = document.getElementById("forth");
    if (elementFourth) {
        // Trigger the transition by adding the 'move' class
        elementFourth.classList.add("moveRight");
      }

      const elementFifth = document.getElementById("fifth");
      if (elementFifth) {
          // Trigger the transition by adding the 'move' class
          elementFifth.classList.add("moveDown");
        }
}   

function RoadmapWeb() {
    return (
        
      <div className="roadmapWeb">
              <button onClick={swap}>NEXT</button>
                <div id="first">first</div>
                <div id="second">second</div>
                <div id="third">third</div>
                <div id="fourth">fourth</div>
                <div id="fifth">fifth</div>
            </div>
    )
}

export default RoadmapWeb
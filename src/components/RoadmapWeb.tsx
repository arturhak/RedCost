import React from "react";

function RoadmapWeb () {
    return (
        <>
            <button>NEXT</button>
        <div className="roadmapWeb">
            {["first","second","third","fourth","fifth"].map((el:any,index)=> <div className="r_1" key={index} id={el}>{el}</div> )}
        </div>
        </>
    )
}

export default RoadmapWeb
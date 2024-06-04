import React, { useState } from "react";

function SecurityDiscover (props:any) {
    // const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e:any) => {
        console.log(e)
    };

    const handleMouseLeave = (e:any) => {
        console.log(e)
    };

    return (
        <>
            <div className="discover-security-item"
                 onMouseMove={handleMouseMove}
                 onMouseLeave={handleMouseLeave} >
                <div className="discover-security-item-title">
                    <img src={props.image} alt="SecurytyImage"/>
                    <div className="discover-security-item-subtitle">{props.subtitle}</div>
                </div>
                <div className="discover-security-item-content">
                    {props.content}
                </div>
            </div>
        </>
    )
}

export default SecurityDiscover;
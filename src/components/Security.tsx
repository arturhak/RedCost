import React, { useState } from "react";

function Security (props:any) {
    // const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e:any) => {
      const boundingRect = e.currentTarget.getBoundingClientRect();
      const mouseX = e.clientX - boundingRect.left;
      const mouseY = e.clientY - boundingRect.top;
      const centerX = boundingRect.width / 4;
      const centerY = boundingRect.height / 4;
      const maxRotateX = 10; // Maximum rotation angle around X-axis
      const maxRotateY = 13; // Maximum rotation angle around Y-axis
      const perspective = 4000; // Perspective value
      
      const rotateX = ((mouseY - centerY) / centerY) * maxRotateX;
      const rotateY = ((mouseX - centerX) / centerX) * maxRotateY;
  
      e.currentTarget.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
  
    const handleMouseLeave = (e:any) => {
      e.currentTarget.style.transform = 'perspective(300px) rotateX(0deg) rotateY(0deg)';
    };

    return (
        <>
            <div className="security-item"
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave} >
                <div className="security-item-title">
                    <img src={props.image} alt="SecurytyImage"/>
                    <div className="security-item-subtitle">{props.subtitle}</div>
                </div>
                <div className="security-item-content">
                    {props.content}
                </div>
            </div>
        </>
    )
}

export default Security;
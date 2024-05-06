import React from "react";

function Security (props:any) {
    return (
        <>
            <div className="security-item">
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
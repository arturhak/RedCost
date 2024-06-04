import React from "react";

function Offer (props:any) {
    return (
        <div className="offer">
            <div className="offer__content">
                <div className="offer__content__title">
                    {props.title}
                </div>
                <div className="offer__content__text">
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default Offer;

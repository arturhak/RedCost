import React from "react";

function MainComponent2 (props:any) {

    return (
        <div className="main-component-2">
            <div className="main-component-2__left-side ">
                <div className="line-width_1"></div>
                <div className="main-component-2-subtitle">{props.subtitle}</div>
                <div className="main-component-2-content">
                    {props.content1}
                    <br/>
                    <br/>
                    {props.content2}
                </div>
                <div className="line-width_2"></div>
            </div>
            <img src={props.image} alt="image" className="left-side-image-web"/>
            <img src={props.imageMobile} alt="image" className="left-side-image-mob"/>
            <div className="main-component-2__left-side ">
                <div className="line-width_2"></div>
                <div className="main-component-2-content">
                    {props.content11}
                    <br/>
                    <br/>
                    {props.content22}
                </div>
                <div className={props.buttonSize? "main-component-button main-component-button_width": "main-component-button"}>
                    {props.buttonValue}
                </div>
                <div className="line-width_1"></div>
            </div>

        </div>
    )
}

export default MainComponent2;
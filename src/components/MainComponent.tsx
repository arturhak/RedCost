import React from "react";

function MainComponent (props:any) {
    return (
        <div className={props.reverse ?"main-component reverse": "main-component"}>
            <div className="left-side">
                <img src={props.image} alt="image"/>
            </div>
            <div className="right-side">
                <div className="title-group">
                    <div className="title-group_line-title">
                        <div className="line"></div>
                        <div className={props.title? "title": "d-none" }>{props.titleText}</div>
                    </div>
                    <div className="subtitle">{props.subtitle}</div>
                </div>
                <div className="content">
                    {props.content1}
                    <br/>
                    <br/>
                    {props.content2}
                </div>
                <div className={props.isInput? "input-group": "d-none"}>
                    <input type="text" className="input" placeholder={"Name: "}/>
                    <input type="text" className="input" placeholder={"Email: "}/>
                </div>
                <div className={props.buttonSize? "main-component-button main-component-button_width": "main-component-button"}>
                    WHITEPAPER
                </div>
            </div>
        </div>
    )
}

export default MainComponent;
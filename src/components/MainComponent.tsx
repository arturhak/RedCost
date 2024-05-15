import React, {useEffect} from "react";

function MainComponent (props:any) {

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

    },[])

    const handleScroll = () => {
        let elLeft:any = document.querySelector(".left-side");
        let elRight:any = document.querySelector(".right-side");
        let position = elLeft.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom <= window.innerHeight) {
            elLeft.classList.add("anim-from-left")
            elRight.classList.add("anim-from-right")
        }else {
            elLeft.classList.remove("anim-from-left")
            elRight.classList.remove("anim-from-right")
        }
    }
    return (
        <div className={props.reverse ?"main-component reverse": "main-component"} data-aos="fade-up">
            <div className="left-side ">
                <img src={props.image} alt="image" className="left-side-image-web"/>
                <img src={props.imageMobile} alt="image" className="left-side-image-mob"/>
            </div>
            <div className="right-side ">
                <div className="title-group">
                    <div className="title-group_line-title">
                        <div className="line-width"></div>
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
                    {props.buttonValue}
                </div>
            </div>
        </div>
    )
}

export default MainComponent;
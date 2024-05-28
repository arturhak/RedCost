import React, {useState} from "react";
import Logo from "../assets/logo.svg";
import {navItems} from "../constants/navItems";
import {socialItems} from "../constants/socialItems";
import leftFill from "../assets/icons/left-fill.svg";
import close from "../assets/icons/close.svg";


function WebHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [onHover, setOnHover] = useState(false);

    const openSocialGroup = () => {
        setIsOpen(!isOpen);
    };

    const handleClickNavItem = (item:String) => {
        console.log(`Click on ${item} and navigate ${item}` )
    }
    const handleClickSocialItem = (item:String) => {
        console.log(`Click on ${item} and navigate ${item}` )
    }
    const handleMouseMove = (e:any) => {
        const boundingRect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - boundingRect.left;
        const mouseY = e.clientY - boundingRect.top;
        const centerX = boundingRect.width / 8;
        const centerY = boundingRect.height / 2;
        const maxRotateX = 15; // Maximum rotation angle around X-axis
        const maxRotateY = 1; // Maximum rotation angle around Y-axis
        const perspective = 4000; // Perspective value

        const rotateX = ((mouseY - centerY) / centerY) * maxRotateX;
        const rotateY = ((mouseX - centerX) / centerX) * maxRotateY;

        e.currentTarget.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (e:any) => {
        e.currentTarget.style.transform = 'perspective(300px) rotateX(0deg) rotateY(0deg)';
    };
    return (
        <div className="web-header">
            <div className="logo"
                 onMouseMove={handleMouseMove}
                 onMouseLeave={handleMouseLeave}
            >
                <img src={Logo} alt="logo"/>
            </div>
            <div className={!isOpen? "navbar": "hide-nav"}>
                {navItems.map((item:String,key)=>{
                    return <div className="navbar-item" key={key} onClick={()=>handleClickNavItem(item)}>{item}</div>
                })}
            </div>

            <div className="web-header-group-items">
                <div className="login">
                    <div className={!isOpen? "navbar-item-market_nft": "hide-nav navbar-item-market_nft"}>Market NFT</div>

                    {!isOpen?
                        <img src={leftFill} alt="leftFill" className="social-group-logo-img" onClick={openSocialGroup}/>:
                        <img src={close} alt="leftFill" className="social-group-logo-img" onClick={openSocialGroup}/>
                    }
                    <div className={!isOpen? "social-group-logo": "social-group-logo open"}>
                        {socialItems.map((socialItem:any,key) =>{
                            return <div
                                className="social-item"
                                key={key}
                                onClick={() => handleClickSocialItem(socialItem.name)}
                            >
                                {socialItem.logosvg}
                            </div>
                        })}
                    </div>
                    <div className="login-button">Login</div>
                </div>
            </div>
        </div>
    )
}

export default WebHeader;
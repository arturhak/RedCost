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

    return (
        <div className="web-header">
            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>
            <div className={!isOpen? "navbar": "hide-nav"}>
                {navItems.map((item:String,key)=>{
                    return <div className="navbar-item" key={key} onClick={()=>handleClickNavItem(item)}>{item}</div>
                })}
            </div>
            <div className="web-header-group-items">
                <div className={!isOpen? "navbar-item-market_nft": "hide-nav navbar-item-market_nft"}>Market NFT</div>
                <div className="login">
                    {!isOpen?
                        <img src={leftFill} alt="leftFill" className="social-group-logo-img" onClick={openSocialGroup}/>:
                        <img src={close} alt="leftFill" className="social-group-logo-img" onClick={openSocialGroup}/>
                    }
                    <div className={!isOpen? "social-group-logo": "social-group-logo open"}>
                        {socialItems.map((socialItem:any,key) =>{
                            return <img
                                src={socialItem.logo}
                                alt="logo"
                                className="social-item"
                                key={key}
                                onClick={() => handleClickSocialItem(socialItem.name)}
                                onMouseOver={() => setOnHover(true)}
                                onMouseLeave={() => setOnHover(false)}
                            />
                        })}
                    </div>
                    <div className="login-button">Login</div>
                </div>
            </div>
        </div>
    )
}

export default WebHeader;

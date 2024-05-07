import React from "react";
import Logo from "../assets/logo.svg";
import {navItems} from "../constants/navItems";
import {socialItems} from "../constants/socialItems";
import leftFill from "../assets/images/left-fill.svg"


function WebHeader() {

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
            <div className="navbar">
                {navItems.map((item:String,key)=>{
                    return <div className="navbar-item" key={key} onClick={()=>handleClickNavItem(item)}>{item}</div>
                })}
            </div>
            <div className="web-header-group-items">
                <div className="navbar-item-market_nft">Market NFT</div>
                <div className="login">
                    <div className="social-group-logo">
                        <img src={leftFill} alt="leftFill" style={{height: "19px"}}/>
                        {socialItems.map((socialItem:any,key) =>{
                            return <img src={socialItem.logo} alt="logo" key={key} onClick={() => handleClickSocialItem(socialItem.name) } />
                        })}
                    </div>
                    <div className="login-button">Login</div>
                </div>
            </div>
        </div>
    )
}

export default WebHeader;

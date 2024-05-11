import React, {useState} from "react";
import {Drawer} from 'antd';
import {navItems, profileItem} from "../constants/navItems";
import {socialItems} from "../constants/socialItems";
import mobileLogo from "../assets/mobile-logo.svg"
import avatar from "../assets/icons/avatar.svg";

function MobileHeader(props: any) {

    const [open, setOpen] = useState(false);
    const [burgerDrawer, setBurgerDrawer] = useState(false);
    const [isWallet, setIsWallet] = useState(false);

    const showProfileDrawer = () => {
        setOpen(true);
        setBurgerDrawer(false)
    };

    const showBurgerDrawer = () => {

        if (open) {
            setOpen(false);
        }else{
            setOpen(true)
            setBurgerDrawer(true)
        }
    };

    const onClose = () => {
        setOpen(false);
    };

    const handleClickNavItem = (item:String) => {
        console.log(`Click on ${item} and navigate ${item}` )
    }
    const handleClickProfileItem = (item:String) => {
        console.log(`Click on ${item} and navigate ${item}` )
    }

    const handleClickSocialItem = (item:String) => {
        console.log(`Click on ${item} and navigate ${item}` )
    }
    const handleHome = () => {
        console.log("go to home page");
        setOpen(false)
    }

    return (
        <div className="mobile-header" >
            <div onClick={handleHome} style={{cursor: "pointer"}} className="logo">
                <img src={mobileLogo} alt="mobileLogo" />
            </div>
            <div className="login-burger-group">
                {isWallet?
                    <div onClick={showProfileDrawer}>
                        <img src={avatar} alt="avatar" style={{cursor: "pointer"}} />
                    </div>:
                    <div className="mobile-login-button">Login</div>
                }
                 <div className={!open? "hamburger": "is-active"} onClick={showBurgerDrawer} id="hamburger-1">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                 </div>
            </div>
            <Drawer
                placement="right"
                onClose={onClose}
                open={open}
                width={390}
            >
                {burgerDrawer?
                    <div className="drower-content-navbar">
                        {navItems.map((item: String, index) => {
                            return <div  className="drower-content-navbar-item" key={index}
                                        onClick={() => handleClickNavItem(item)}>{item}</div>
                        })}
                        <div className="drower-content-navbar-nft">Market NFT</div>
                    </div>:
                    <div className="drower-content-navbar drower-content-profile">
                        {profileItem.map((item: any, index) => {
                            return <div style={{display:"flex", gap: "8px", alignItems:"center"}} key={index}>
                                <img src={item.icon} alt=""/>
                                <div className="drower-content-navbar-item"
                                        onClick={() => handleClickProfileItem(item.option)}>{item.option}</div>
                            </div>
                        })}
                    </div>
                }

                <div className="drower-content-navbar-bottom">
                    {socialItems.map((socialItem:any,key) =>{
                        return <img
                            style={{width:"29px",height:"29px"}}
                            src={socialItem.logo}
                            alt="logo"
                            className="social-item"
                            key={key}
                            onClick={() => handleClickSocialItem(socialItem.name)}
                        />
                    })}
                </div>
            </Drawer>
        </div>
    )
}

export default MobileHeader;

import React, {useState} from "react";
import {Drawer} from 'antd';
import {navItems, profileItem} from "../constants/navItems";
import {socialItems} from "../constants/socialItems";
import closeDrowerIcon from "../assets/icons/closeDrowerIcon.svg"
import mobileLogo from "../assets/mobile-logo.svg"

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

    return (
        <div className="mobile-header">
            <div onClick={showProfileDrawer}>
                <img src={mobileLogo} alt="mobileLogo" onClick={()=>{}}/>
            </div>
            <div className="login-burger-group">
                {!isWallet? <div onClick={showProfileDrawer}>
                    avatar
                </div>: <div>Login</div>}
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
                        {navItems.map((item: String, key) => {
                            return <div  className="drower-content-navbar-item" key={key}
                                        onClick={() => handleClickNavItem(item)}>{item}</div>
                        })}
                        <div className="drower-content-navbar-nft">Market NFT</div>
                    </div>:
                    <div className="drower-content-navbar drower-content-profile">
                        {profileItem.map((item: any, key) => {
                            return <div style={{display:"flex", gap: "8px", alignItems:"center"}} key={key}>
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

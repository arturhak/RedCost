import React, {useState} from "react";
import {Drawer} from 'antd';
import {navItems, profileItem} from "../constants/navItems";
import {socialItems} from "../constants/socialItems";
import mobileLogo from "../assets/mobile-logo.svg"
import avatar from "../assets/icons/avatar.svg";
import {useNavigate} from "react-router-dom";

function MobileHeader(props: any) {

    const [open, setOpen] = useState(false);
    const [burgerDrawer, setBurgerDrawer] = useState(false);
    const [isWallet, setIsWallet] = useState(false);
    const navigate = useNavigate()

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
    const handleClickNavItem = (index:any) => {
        switch (index) {
            case 0:
                navigate("./about")
                break;
            case 1:
                navigate("./discover")
                break;
            case 3:
                navigate("./investors")
                break;

            default:
                navigate("./error")
        }
        console.log(`Click on ${index} and navigate ${index}` )
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
                        {navItems.map((item: String, index:any) => {
                            return <div  className="drower-content-navbar-item" key={index}
                                        onClick={() => handleClickNavItem(index)}>{item}</div>
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
                        return <div
                            style={{cursor:"pointer"}}
                            key={key}
                            onClick={() => handleClickSocialItem(socialItem.name)}
                        >
                            {socialItem.logosvg}
                        </div>
                    })}
                </div>
            </Drawer>
        </div>
    )
}

export default MobileHeader;

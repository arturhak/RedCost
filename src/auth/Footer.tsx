import React, {useState} from "react";
import Logo from "../assets/logo.svg";
import {socialItems} from "../constants/socialItems";
import rightFill from "../assets/icons/right-fill.svg"
import leftFill from "../assets/icons/left-fill.svg";
import close from "../assets/icons/close.svg";


function Footer () {
    const [isOpen, setIsOpen] = useState(false);

    const openSocialGroup = () => {
        setIsOpen(!isOpen);
    };
    const handleClickSocialItem = (item:String) => {
        console.log(`Click on ${item} and navigate ${item}` )
    }

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="logo">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <div className="footer-top-left-text">
                        new era for making money on NFT assets
                    </div>
                </div>
                <div className="footer-top-right">
                    <div className="nav-footer">
                        <div className="nav-footer-item">About</div>
                        <div className="nav-footer-item">Discover</div>
                        <div className="nav-footer-item">AirDrop</div>
                    </div>
                    <div className="nav-footer">
                        <div className="nav-footer-item">For investors</div>
                        <div className="nav-footer-item">Contact</div>
                        <div className="nav-footer-item">Market NFT</div>
                    </div>

                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <div className="footer-bottom-left-item">© 2024</div>
                    <div className="footer-bottom-left-item">WhitePaper</div>
                    <div className="footer-bottom-left-item">Privacy Policy</div>

                </div>
                <div className="footer-bottom-right-group">
                    <div  className={!isOpen? "footer-bottom-right": "footer-bottom-right open-icons-group"}>
                        {socialItems.map((socialItem:any,key) =>{
                            return <img src={socialItem.logo} alt="logo" key={key} onClick={() => handleClickSocialItem(socialItem.name) } />
                        })}
                    </div>
                    {!isOpen?
                        <img src={rightFill} alt="rightFill" className="social-group-logo-img" onClick={openSocialGroup}/>:
                        <img src={close} alt="leftFill" className="social-group-logo-img" onClick={openSocialGroup}/>
                    }
                </div>

            </div>

        </div>
    )
}

export default Footer;

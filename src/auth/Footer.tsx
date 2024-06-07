import React, {useState} from "react";
import Logo from "../assets/logo.svg";
import {socialItems} from "../constants/socialItems";
import rightFill from "../assets/icons/right-fill.svg"
import mobileLogo from "../assets/mobile-logo.svg"
import close from "../assets/icons/close.svg";


function Footer () {
    const [isOpen, setIsOpen] = useState(false);

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
                        <img src={Logo} alt="logo" className="footer-logo-web"
                             onMouseMove={handleMouseMove}
                             onMouseLeave={handleMouseLeave}
                        />
                        <img src={mobileLogo} alt="logo" className="footer-logo-mob"/>
                    </div>
                    <div className="footer-top-left-text">
                        new era for making money on NFT assets
                    </div>
                </div>
                <div className="footer-top-right">
                    <div className="nav-footer">
                        <div className="nav-footer-item">About</div>
                        <div className="nav-footer-item fixedposition">Discover</div>
                        <div className="nav-footer-item">AirDrop</div>
                        <div className="nav-footer-item">For investors</div>
                        <div className="nav-footer-item">Contact</div>
                        <div className="nav-footer-item">Market NFT</div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-left footer-bottom-left-mobile">
                    <div className="footer-bottom-left-item">© 2024</div>
                    <div className="footer-bottom-left-item">WhitePaper</div>
                    <div className="footer-bottom-left-item">Privacy Policy</div>

                </div>
                <div className="footer-bottom-right-group">
                    <div  className={!isOpen? "footer-bottom-right": "footer-bottom-right open-icons-group"}>
                        {socialItems.map((socialItem:any,index) =>{
                            return <div
                                key={index}
                                onClick={() => handleClickSocialItem(socialItem.name)}
                            >
                                <div className="svg-container">
                                    {socialItem.logosvg}
                                    {socialItem.logosvgred}
                                </div>
                            </div>
                        })}
                    </div>
                    {!isOpen?
                        <img src={rightFill} alt="rightFill" className="social-group-logo-img" onClick={openSocialGroup}/>:
                        <img src={close} alt="leftFill" className="social-group-logo-img" onClick={openSocialGroup}/>
                    }
                </div>

                {/*MObile social Items Scroll*/}

                <div className="footer-bottom-right-group-mob">
                    {socialItems.map((socialItem:any,index) =>{
                        return <div
                            key={index}
                            onClick={() => handleClickSocialItem(socialItem.name)}
                        >
                            <div className="svg-container">
                                {socialItem.logosvg}
                                {socialItem.logosvgred}
                            </div>
                        </div>
                    })}
                </div>

            </div>

        </div>
    )
}

export default Footer;

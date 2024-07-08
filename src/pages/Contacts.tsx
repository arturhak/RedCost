import React from "react"
import bgImage from "../assets/bg-image.svg";
import bgImageMobile from "../assets/bg-image-mobile.svg";
import CountDown from "../components/CountDown";
import MainComponent from "../components/MainComponent";
import RedCost from "../assets/images/red-cost.svg";
import RedCostMob from "../assets/images/red-cost-mob.svg";
import RedCostCenter from "../assets/images/red-cost-center.svg";
import Walf from "../assets/Walf.svg";
import Security from "../components/Security";
import SecurytyImage from "../assets/images/security-logo.svg";
import RoadmapWeb from "../components/RoadmapWeb";
import { socialItemsList } from "../constants/socialItems";
import SecurityDiscover from "../components/SecurityDiscover";
import MainComponent2 from "../components/MainComponent2";
import Offer from "../components/Offer";
import RoadmapWebJoin from "../components/RoadmapWebJoin";
import { useNavigate } from "react-router-dom";
import telTop from "../assets/tel-top.svg";
import telBottom from "../assets/tel-bottom.svg";
import telInner from "../assets/tel-inner.svg";
import emailTop from "../assets/email-top.svg";
import emailBottom from "../assets/email-bottom.svg";
import addressTop from "../assets/address-top.svg";
import socialInner from "../assets/social-inner.svg";
import socialTop from "../assets/social-top.svg";

function Contacts() {

    return (
        <div className="contacts">
            <div className="discover-text-block">
                <p className="discover-text">
                    Contact
                </p>
            </div>
            <div className="contacts-first-item">
            </div>

            <div className="responsive-main-top">
                <MainComponent
                    image={RedCost}
                    imageMobile={RedCostMob}
                    title={true}
                    titleText="Join"
                    subtitle="Red Cost"
                    content1={"RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent."}
                    content2={"To create a safe and convenient platform for everyone who understands the topic and wants to earn safely on NFT."}
                    reverse={true}
                    isInput={false}
                    noButton={true}
                />
            </div>
            {/*ADRESS*/}

            <div className="actions-group">
                <div className="address">
                    <img src={addressTop} alt="" className="address-top" />
                    <div className="open-button" >
                        <a href="https://www.google.com/maps" target="_blank">Open in maps</a>
                    </div>
                    <div className="address-title">
                        Address
                    </div>
                </div>

                <div className="telephone">
                    <img src={telInner} alt="" className="tel-inner" />
                    <img src={telTop} alt="" className="tel-top" />
                    <div className="address-title">
                        +0 0000 00 00
                    </div>
                    <img src={telBottom} alt="" className="tel-bottom" />
                </div>

                <div className="email">
                    <img src={emailTop} alt="" className="email-top" />
                    <div className="address-title">
                        mailexample@gmail.com
                    </div>
                    <img src={emailBottom} alt="" className="email-bottom" />
                </div>

                <div className="social">
                    <img src={socialInner} alt="" className="social-inner" />
                    <img src={telTop} alt="" className="social-top" />
                    <div className="address-title">
                        social items
                    </div>
                    <img src={telBottom} alt="" className="social-bottom" />
                </div>

            </div>



            {/*<div className="lastMainComponent1">*/}
            <MainComponent
                image={RedCost}
                imageMobile={RedCostMob}
                title={true}
                titleText=""
                subtitle="TiTle"
                content1={"RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent."}
                content2={"To create a safe and convenient platform for everyone who understands the topic and wants to earn safely on NFT."}
                content3={"RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent."}
                reverse={false}
                isInput={false}
                noButton={true}
            />
            {/*</div>*/}

            <div className="discover-first-item" style={{ marginTop: "160px" }}>
                <div className="discover-digital-art-contacts">
                    <div className="discover-header-side">
                        Enter The New World<br />of Digital Art
                    </div>
                    <div className="discover-bottom-side">
                        <div className="discover-bottom-side-left">
                            <div className="discover-bottom-side-left-header">
                                The marketplace for those who know<br />the true value of digital assets.
                            </div>
                            <div className="discover-bottom-side-left-header_buttons">
                                <div className="discover-left-button">Whitepaper</div>
                                <div className="discover-right-button">About</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="discover-first-item-mobile" style={{ marginTop: "70px" }}>
                <div className="discover-digital-art-contacts">
                    <div className="discover-header-side">
                        Enter The New World<br />of Digital Art
                    </div>
                    <div className="discover-bottom-side">
                        <div className="discover-bottom-side-left">
                            <div className="discover-bottom-side-left-header">
                                The marketplace for those who know<br />the true value of digital assets.
                            </div>
                            <div className="discover-bottom-side-left-header_buttons">
                                <div className="discover-left-button">Whitepaper</div>
                                <div className="discover-right-button">About</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contacts;
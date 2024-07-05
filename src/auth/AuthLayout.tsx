import React, {useState} from "react";
import MainComponent from "../components/MainComponent";
import RedCost from "../assets/images/red-cost.svg";
import RedCostMob from "../assets/images/red-cost-mob.svg";
import RedCost1 from "../assets/images/red-cost-1.svg";
import RedCost1Mob from "../assets/images/red-cost-1-mobile.png";
import RedCost2 from "../assets/images/red-cost-2.svg";
import RedCost2Mob from "../assets/images/red-cost-2-nobile.png";
import SecurytyImage from "../assets/images/security-logo.svg"
import Security from "../components/Security";
import {socialItemsList, socialItemsListBig1, socialItemsListBig2} from "../constants/socialItems";
import bgImage from "../assets/bg-image.svg";
import bgImageMobile from "../assets/bg-image-mobile.svg";
import RoadmapWeb from "../components/RoadmapWeb";
import CountDown from "../components/CountDown";
import CountdownGradient from "../components/countdown/CountdownGradient";

function AuthLayout () {

    const handleClickSocialItem = (item:String) => {
        console.log(`Click on ${item} and navigate ${item}` )
    }

    return (
        <div className="auth-layouth">
            <div className="bg-image">
                <img src={bgImage} alt="bg-image-web" className="bg-image-web"/>
                <img src={bgImageMobile} alt="bg-image-mobile" className="bg-image-mobile"/>
            </div>

            <div className="digital-art">
                <div className="header-side">
                    Enter The New World<br/>of Digital Art
                </div>
                <div className="bottom-side">
                    <div className="bottom-side-left">
                        <div className="bottom-side-left-header">
                            The marketplace for those who know<br/>the true value of digital assets.
                        </div>
                        <div className="bottom-side-left-header_buttons">
                            <div className="left-button">Explore now</div>
                            <div className="right-button">AirDrop</div>
                        </div>
                    </div>
                    {/*<div className="auth-countdown">*/}
                        <CountdownGradient />
                    {/*</div>*/}
                </div>
            </div>
            <div id="firstMainComponent">
                <MainComponent
                    image={RedCost}
                    imageMobile={RedCostMob}
                    title={true}
                    titleText="ABOUT"
                    subtitle="RED COST"
                    content1={"RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent."}
                    content2={"To create a safe and convenient platform for everyone who understands the topic and wants to earn safely on NFT."}
                    reverse={false}
                    buttonSize={true}
                    isInput={false}
                    buttonValue="WHITEPAPER"
                />
            </div>
            <div className="security-component">
                <div className="security-component-header">
                    <div className="line_1"></div>
                    <div className="security-component-title">we offer you</div>
                    <div className="line_1"></div>
                </div>
                <div className="security-group">
                    {[1,2,3,4].map((index)=> {
                        return <Security
                            key={index}
                            image={SecurytyImage}
                            subtitle="Security"
                            content="Your NFTs are stored in a digital wallet. And it’s crucial to keep this wallet secure."
                        />
                    })}
                </div>
                <div className="security-component-button">
                    Explore now
                </div>
            </div>

            <div className="roadmap">

                <RoadmapWeb />

            </div>
            <div className="lastMainComponent">
                <MainComponent
                    image={RedCost1}
                    imageMobile={RedCost1Mob}
                    title={true}
                    titleText="OUR"
                    subtitle="AirDrop"
                    content1={"RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent."}
                    reverse={true}
                    buttonSize={false}
                    isInput={true}
                    buttonValue="Start now"

                />
            </div>
            <div className="social-big-logo-group">
                <div className="security-component-header">
                    <div className="line_1"></div>
                    <div className="security-component-title">follow our socials</div>
                    <div className="line_1"></div>
                </div>
                <div className="social-group-component">
                    {socialItemsListBig1.map((item,key)=> {
                        return <div
                            // className="folow-item"
                            key={key}
                            onClick={() => handleClickSocialItem(item.name)}
                        >
                            <div className="svgbig-container">
                                {item.logosvg}
                                {item.logoRed}
                            </div>
                        </div>
                    })}
                    </div>
                <div className="social-group-component1">
                    {socialItemsListBig2.map((item,key)=> {
                        return <div
                            className="folow-itembig"
                            key={key}
                            onClick={() => handleClickSocialItem(item.name)}
                        >
                            <div className="svgbig-container">
                                {item.logosvg}
                                {item.logoRed}
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className="lastMainComponent1">
                <MainComponent
                    image={RedCost2}
                    imageMobile={RedCost2Mob}
                    title={true}
                    titleText="important"
                    subtitle="For Investors"
                    content1={"RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent."}
                    buttonSize={false}
                    isInput={true}
                    buttonValue="Learn more"

                />
            </div>

        </div>
    )
}

export default AuthLayout;


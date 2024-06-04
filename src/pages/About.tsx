import React from "react"
import bgImage from "../assets/bg-image.svg";
import bgImageMobile from "../assets/bg-image-mobile.svg";
import CountDown from "../components/CountDown";
import MainComponent from "../components/MainComponent";
import RedCost from "../assets/images/red-cost.svg";
import RedCostMob from "../assets/images/red-cost-mob.svg";
import Security from "../components/Security";
import SecurytyImage from "../assets/images/security-logo.svg";
import RoadmapWeb from "../components/RoadmapWeb";
import {socialItemsList} from "../constants/socialItems";

function About () {

    const handleClickSocialItem = (item:String) => {
        console.log(`Click on ${item} and navigate ${item}` )
    }

    return (
        <div className="about">
            <div className="about-text">
                About
            </div>
            <div>
                <MainComponent
                    image={RedCost}
                    imageMobile={RedCostMob}
                    title={true}
                    titleText="ABOUT"
                    subtitle="RED COST"
                    content1={"RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent."}
                    content2={"To create a safe and convenient platform for everyone who understands the topic and wants to earn safely on NFT."}
                    reverse={true}
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
                    image={RedCost}
                    imageMobile={RedCostMob}
                    title={true}
                    titleText=""
                    subtitle="TiTle"
                    content1={"RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent."}
                    content2={"To create a safe and convenient platform for everyone who understands the topic and wants to earn safely on NFT."}
                    reverse={true}
                    buttonSize={true}
                    isInput={false}
                    buttonValue="CONTACT"
                />
            </div>
            <div className="social-big-logo-group">
                <div className="security-component-header">
                    <div className="line_1"></div>
                    <div className="security-component-title">follow our socials</div>
                    <div className="line_1"></div>
                </div>
                <div className="social-group-component">
                    {socialItemsList.map((item,key)=> {
                        return <div
                            className="folow-item"
                            key={key}
                            onClick={() => handleClickSocialItem(item.name)}
                        >
                            {item.logosvg}
                        </div>
                    })}
                </div>
            </div>
            <div className="lastMainComponent1">
                <MainComponent
                    image={RedCost}
                    imageMobile={RedCostMob}
                    title={true}
                    titleText=""
                    subtitle="TiTle"
                    content1={"RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent."}
                    content2={"To create a safe and convenient platform for everyone who understands the topic and wants to earn safely on NFT."}
                    reverse={false}
                    buttonSize={true}
                    isInput={false}
                    buttonValue="WHITEPAPER"
                />
            </div>

        </div>
    )
}
export default About;
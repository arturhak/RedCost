import React from "react"
import bgImage from "../assets/bg-image.svg";
import bgImageMobile from "../assets/bg-image-mobile.svg";
import CountDown from "../components/CountDown";
import MainComponent from "../components/MainComponent";
import RedCost from "../assets/images/red-cost.svg";
import RedCostMob from "../assets/images/red-cost-mob.svg";
import RedCostCenter from "../assets/images/red-cost-center.svg";
import Walf from "../assets/walf.svg";
import Security from "../components/Security";
import SecurytyImage from "../assets/images/security-logo.svg";
import RoadmapWeb from "../components/RoadmapWeb";
import { socialItemsList } from "../constants/socialItems";
import SecurityDiscover from "../components/SecurityDiscover";
import MainComponent2 from "../components/MainComponent2";

function About() {

    return (
        <div className="discover">
            <div className="discover-text-block">
                <p className="discover-text">
                    Discover
                </p>
            </div>
            <div className="discover-first-item">

                <div className="discover-digital-art">
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
            <div className="discover-first-item-mobile">
                <p className="discover-text">
                    Discover
                </p>

                <div className="discover-digital-art">
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
            <div className="security-component">
                <div className="security-component-header">
                    <div className="line_1"></div>
                    <div className="security-component-title">Title</div>
                    <div className="line_1"></div>
                </div>
                <div className="discover-security-group">
                    {[1, 2, 3, 4, 5, 6].map((index) => {
                        return <SecurityDiscover
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

            <div className="lastMainComponent3">
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
                    buttonValue="Button"
                />
            </div>
            <div>
                <MainComponent2
                    image={RedCostCenter}
                    imageMobile={RedCostMob}
                    subtitle="TiTle"
                    content1={"RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent."}
                    content2={"To create a safe and convenient platform for everyone who understands the topic and wants to earn safely on NFT."}
                    content11={"RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent."}
                    buttonSize={false}
                    buttonValue="Button"
                />
            </div>

            <div className="lastMainComponent2">
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
                    buttonValue="Button"
                />
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
                    buttonValue="Button"
                />
            </div>

            <MainComponent2
                image={RedCostCenter}
                imageMobile={RedCostMob}
                subtitle="TiTle"
                content1={"RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent."}
                content2={"To create a safe and convenient platform for everyone who understands the topic and wants to earn safely on NFT."}
                content11={"RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent."}
                buttonSize={false}
                buttonValue="Button"
            />

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
                    buttonValue="Button"
                />
            </div>
            <div className="discover-last-item">
                <div className="discover-last-item-digital-art">
                    <div className="discover-header-side">
                        Enter The New World<br />of Digital Art
                    </div>
                    <div className="discover-bottom-side">
                        <div className="discover-bottom-side-left">
                            <div className="discover-bottom-side-left-header">
                                The marketplace for those who know<br />the true value of digital assets.
                            </div>
                            <div className="discover-last-item-left-button">AirDrop</div>
                        </div>
                    </div>
                </div>
                <div className="walf-image-web">
                    <img src={Walf} alt="" />
                </div>
            </div>

        </div>
    )
}
export default About;
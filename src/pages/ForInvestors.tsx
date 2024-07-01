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
import {socialItemsList} from "../constants/socialItems";
import SecurityDiscover from "../components/SecurityDiscover";
import MainComponent2 from "../components/MainComponent2";
import Offer from "../components/Offer";
import RoadmapWebJoin from "../components/RoadmapWebJoin";

function Investors () {

    return (
        <div className="investors">

            <div className="investors-first-item">
                <p className="discover-text">
                    For Investors
                </p>

                <div className="discover-digital-art">
                    <div className="discover-header-side">
                        Enter The New World<br/>of Digital Art
                    </div>
                    <div className="discover-bottom-side">
                        <div className="discover-bottom-side-left">
                            <div className="discover-bottom-side-left-header">
                                The marketplace for those who know<br/>the true value of digital assets.
                            </div>
                            <div className="discover-bottom-side-left-header_buttons">
                                <div className="discover-left-button">WHITEPAPER</div>
                                <div className="discover-right-button">About</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="investors-first-item-mobile">
                <p className="discover-text">
                    For Investors
                </p>

                <div className="discover-digital-art">
                    <div className="discover-header-side">
                        Enter The New World<br/>of Digital Art
                    </div>
                    <div className="discover-bottom-side">
                        <div className="discover-bottom-side-left">
                            <div className="discover-bottom-side-left-header">
                                The marketplace for those who know<br/>the true value of digital assets.
                            </div>
                            <div className="discover-bottom-side-left-header_buttons">
                                <div className="discover-left-button">Whitepaper</div>
                                <div className="discover-right-button">About</div>
                            </div>
                        </div>
                    </div>
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
                reverse={true}
                isInput={false}
                noButton={true}
            />
            {/*</div>*/}

            <div className="offer-block">
                <div className="offer-block__header">
                    <div className="line_1"></div>
                    <div className="security-component-title">title</div>
                    <div className="line_1"></div>
                </div>
                <div className="offer-group">
                    {[1,2,3,4,5,6].map((index) => {
                        return <Offer
                            key={index}
                            title="Offer"
                            content="Your NFTs are stored in a digital wallet. And it’s crucial to keep this wallet secure. Your NFTs are stored in a digital wallet. And it’s crucial to keep this wallet secure."
                        />
                    })}
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

            <RoadmapWebJoin />

            {/*<div className="lastMainComponent1">*/}
            <MainComponent
                image={RedCost}
                imageMobile={RedCostMob}
                title={true}
                titleText=""
                subtitle="TiTle"
                content1={"RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent."}
                content2={"To create a safe and convenient platform for everyone who understands the topic and wants to earn safely on NFT."}
                reverse={true}
                isInput={false}
                noButton={false}
                buttonValue="Contacts"
                buttonSize={true}
            />
            {/*</div>*/}

        </div>
    )
}
export default Investors;
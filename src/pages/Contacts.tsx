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

function Contacts () {

    return (
        <div className="contacts">

            <div className="contacts-first-item">
                <p className="contacts-text">
                    Contact
                </p>
            </div>

            <div style={{marginTop: "-200px"}}>
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

            <div className="discover-first-item" style={{marginTop: "160px"}}>
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
            <div className="discover-first-item-mobile" style={{marginTop: "70px"}}>
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

        </div>
    )
}
export default Contacts;
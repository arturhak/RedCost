import React from "react";
import Walf from "../assets/walf.svg";
import CountDownAirdrop from "../components/CountDownAirdrop";
import NFTitem from "../components/NFTItem";
import NFT1 from "../assets/nft/nft_1.svg"
import Offer from "../components/Offer";
import {socialItemsListBig1, socialItemsListBig2} from "../constants/socialItems";
import MainComponent from "../components/MainComponent";
import RedCostImage from "../assets/images/red-cost-image.svg";
import RedCostMob from "../assets/images/red-cost-mob.svg";
import {NFTImages} from "../constants/marketButtonsName";
import CountdownSmall from "../components/countdown/CountdownSmall";
import CountdownMain from "../components/countdown/CountdownMain";



function AirDrop () {

    const handleClickSocialItem = (item:String) => {
        console.log(`Click on ${item} and navigate ${item}` )
    }
    return (
        <div className="airdrop">
            <div className="airdrop-first-item">
                <p className="airdrop-text">
                    <span>Air Drop</span>
                </p>
                <div className="airdrop-last-item">
                    <div className="airdrop-nft-left">
                        <div className="nft-details">
                            <div className="name">NFT Name</div>
                            <div className="details">
                                <div className="creator-name">@author name</div>
                                <div className="price">Open edition 0.000 ETH</div>
                            </div>
                        </div>
                        <div className="airdrop-countdown">
                            <div className="airdrop-countdown-small">
                                <CountdownSmall />
                            </div>
                            <div className="bottom-side-left-header_buttons-airdrop">
                                <div className="left-button-airdrop">Whitepaper</div>
                                <div className="right-button-airdrop">Whitelist</div>
                            </div>
                        </div>
                    </div>
                    <div className="walf-image-web">
                        <img src={Walf} alt="" />
                    </div>
                </div>
            </div>
            <div className="offer-block">
                <div className="offer-block__header">
                    <div className="line_1"></div>
                    <div className="security-component-title">title</div>
                    <div className="line_1"></div>
                </div>
                <div className="nft-group">
                    {NFTImages.map((itemImage,index) => {
                        return <div><NFTitem
                            key={index}
                            image={itemImage.img}
                            name={itemImage.NFTName}
                            owners={itemImage.owners}
                            ownwersCount={itemImage.ownwersCount}
                            percent={itemImage.percent}
                            houre={itemImage.houre}
                            price={itemImage.price}
                        />
                        </div>
                    })}
                </div>
                <div className="nft-group-button">
                    <div className="nft-airdrop-button">Whitelist</div>
                </div>
            </div>
            <div>
                <MainComponent
                    image={RedCostImage}
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
            <div className="airdrop-last-item mt-160" >
                <div className="airdrop-nft-left">
                    <div className="nft-details">
                        <div className="name">NFT Name</div>
                        <div className="details">
                            <div className="creator-name">@author name</div>
                            <div className="price">Open edition 0.000 ETH</div>
                        </div>
                    </div>
                    <div className="airdrop-countdown">
                        <div className="airdrop-countdown-small">
                            <CountdownSmall />
                        </div>
                        <div className="bottom-side-left-header_buttons-airdrop">
                            <div className="left-button-airdrop">Whitepaper</div>
                            <div className="right-button-airdrop">Whitelist</div>
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

export default AirDrop;
import React, {useState} from "react";
import NFT6 from "../assets/nft/nft_6.svg";
import CollectionStar from "../assets/collection-star.svg";
import Views from "../assets/views.svg";
import Favorites from "../assets/favorites.svg";
import Category from "../assets/category.svg";
// import CountdownSales from "../components/CountdownSales";
import Countdown from 'react-countdown';
import Basket from "../assets/icons/basket.svg";

function NFTDetails () {
    const [views, setViews] = useState<any>("000");
    const [favorites, setFavorites] = useState<any>("000");
    const [priceBNB, setPriceBNB] = useState<number>(1000);
    const [priceUSD, setPriceUSD] = useState<number>(5000);

    function formatTime(date:any) {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert 24-hour format to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        // Add leading zero to minutes if needed
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;

        return `${hours}:${minutesStr} ${ampm}`;
    }

    const currentDate:any = new Date(5887788878324);


    const renderer = ({ hours, minutes, seconds, completed }:any) => {
        if (completed) {
            // Render a completed state
            return <p className="time-text">00:00:0000</p>;
        } else {
            // Render a countdown
            return <p className="time-text">{hours}:{minutes}:{seconds}</p>;
        }
    };

    const handleBuyNFT = () => {
        console.log("handleBuyNFT")
    }
    const handleDropNFT = () => {
        console.log("handleDropNFT")
    }
    return (
        <div className="nft-details-main">
            <div className="nft-details-first">
                <div className="nft-details-first_left">
                    <img src={NFT6} alt=""/>
                </div>
                <div className="nft-details-first_right">
                    <div className="nft-details-first_right__name">NAME</div>
                    <div className="nft-details-first_right__collection-details">
                        <div className="nft-details-first_right__collection-details___owner">Owned by <span>@author_name</span></div>
                        <div className="nft-details-first_right__collection-details___collection-name">
                            <img src={CollectionStar} alt="CollectionStar"/>
                            <span>collection_name</span>
                        </div>
                    </div>
                    <div className="nft-details-first_right__collection-details___collection-name mt-30">
                        <img src={CollectionStar} alt="CollectionStar"/>
                        <span>collection_name</span>
                    </div>
                    <div className="rating mt-30">
                        <div className="rating_items">
                            <img src={Views} alt=""/>
                            <span>{views} views</span>
                        </div>
                        <div className="rating_items">
                            <img src={Favorites} alt=""/>
                            <span>{favorites} favorites</span>
                        </div>
                        <div className="rating_items">
                            <img src={Category} alt=""/>
                            <span>category</span>
                        </div>
                    </div>
                    <div className="sale-end mt-30">
                        <span>Sale ends</span>
                        <Countdown
                            date={Date.now() + 7000000}
                            renderer={renderer}
                        />
                        <span> at </span>
                        <div> {formatTime(currentDate)} </div>
                    </div>
                    <div className="main-countdown">COUNTDOWN HERE</div>

                    <div className="collection-actions">
                        <div className="collection-actions_title">Current price</div>
                        <div className="collection-actions_current-price">
                            <div className="collection-actions_current-price_bnb">{priceBNB.toLocaleString()} BNB</div>
                            <div className="collection-actions_current-price_usd">${priceUSD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</div>
                        </div>
                        <div className="nft-buy-buttons-gropup">
                            <div className="nft-buy-button" onClick={handleBuyNFT}>
                                <img src={Basket} alt=""/>
                                <span>Buy</span>
                            </div>
                            <div className="nft-drop-button" onClick={handleDropNFT}>
                                <span>Drop the rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NFTDetails;
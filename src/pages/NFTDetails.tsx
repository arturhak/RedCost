import React, { useEffect, useState } from "react";
import NFT6 from "../assets/nft/nft_6.svg";
import CollectionStar from "../assets/collection-star.svg";
import Views from "../assets/views.svg";
import Favorites from "../assets/favorites.svg";
import Category from "../assets/category.svg";
// import CountdownSales from "../components/CountdownSales";
import Countdown from 'react-countdown';
import Basket from "../assets/icons/basket.svg";
import Description from "../assets/icons/description.svg"
import { Dropdown, Space } from "antd";
import type { MenuProps } from 'antd';
import DetailsIcon from "../assets/icons/details-icon.svg";
import ArrowDown from "../assets/icons/arrow-down-grey.svg";
import ArrowUp from "../assets/icons/arrow-up-grey.svg";
import PriceHistory from "../assets/icons/price-history.svg";
import ChartLine from "../assets/icons/chart-hover-line.svg";
import CountdownSmall from "../components/countdown/CountdownSmall";
import { _buy, _decreaseAuctionPrice, getAuctionData, getNFT } from "../web3";
import { useWeb3ModalAccount } from '@web3modal/ethers/react'

function NFTDetails() {
    const [views, setViews] = useState<any>("000");
    const [favorites, setFavorites] = useState<any>("000");
    const [priceBNB, setPriceBNB] = useState<number>(1000);
    const [priceUSD, setPriceUSD] = useState<number>(5000);
    const [openDropdown, setOpenDropdown] = useState<any>();
    const [nftItem, setNftItem] = useState<any>();
    const { address, chainId, isConnected } = useWeb3ModalAccount();

    useEffect(() => {
        let cat: any = localStorage.getItem("myNFT");
        if (cat) {
            setNftItem(JSON.parse(cat))
            var auctionInfo = JSON.parse(cat)
            getAuctionData(auctionInfo.tokenIndex).then(res => {
                setPriceBNB(res.currentPrice / 10 ** 18)
            })
        }

    }, [nftItem]);

    function formatTime(date: any) {
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

    const currentDate: any = new Date(5887788878324);


    const renderer = ({ hours, minutes, seconds, completed }: any) => {
        if (completed) {
            // Render a completed state
            return <p className="time-text">00:00:0000</p>;
        } else {
            // Render a countdown
            return <p className="time-text">{hours}:{minutes}:{seconds}</p>;
        }
    };

    const handleBuyNFT = () => {
        _buy(address, nftItem.tokenIndex)
    }

    const handleDropNFT = () => {

        _decreaseAuctionPrice(address, nftItem.tokenIndex)
    }

    const onOpenChange = (e: any) => {
        setOpenDropdown(e)
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <div className="dropdown-items">
                <div className="dropdown-items_left">Contract Address</div>
                <div className="dropdown-items_right">xxx</div>
            </div>
        },
        {
            key: '2',
            label: <div className="dropdown-items">
                <div className="dropdown-items_left">Token ID</div>
                <div className="dropdown-items_right">xxx</div>
            </div>
        },
        {
            key: '3',
            label: <div className="dropdown-items">
                <div className="dropdown-items_left">Token Standard</div>
                <div className="dropdown-items_right">xxx</div>
            </div>
        },
        {
            key: '4',
            label: <div className="dropdown-items">
                <div className="dropdown-items_left">Chain</div>
                <div className="dropdown-items_right">xxx</div>
            </div>
        },
        {
            key: '5',
            label: <div className="dropdown-items">
                <div className="dropdown-items_left">Last Updated</div>
                <div className="dropdown-items_right">xxx</div>
            </div>
        },
        {
            key: '6',
            label: <div className="dropdown-items">
                <div className="dropdown-items_left">Creator Earnings</div>
                <div className="dropdown-items_right">xxx</div>
            </div>
        },
    ];

    return (
        <div className="nft-details-main">
            <div className="nft-details-first">
                <div className="nft-details-first_left">
                    <img src={nftItem?.tokenURI} alt="" />
                </div>
                <div className="nft-details-first_right">
                    <div className="nft-details-first_right__name">NAME</div>
                    <div className="nft-details-first_right__collection-details">
                        <div className="nft-details-first_right__collection-details___owner">Owned by <span>@author_name</span></div>
                        <div className="nft-details-first_right__collection-details___collection-name">
                            <img src={CollectionStar} alt="CollectionStar" />
                            <span>collection_name</span>
                        </div>
                    </div>
                    {/*<div className="nft-details-first_right__collection-details___collection-name mt-30">*/}
                    {/*    <img src={CollectionStar} alt="CollectionStar"/>*/}
                    {/*    <span>collection_name</span>*/}
                    {/*</div>*/}
                    <div className="rating mt-30">
                        <div className="rating_items">
                            <img src={Views} alt="" />
                            <span>{views} views</span>
                        </div>
                        <div className="rating_items">
                            <img src={Favorites} alt="" />
                            <span>{favorites} favorites</span>
                        </div>
                        <div className="rating_items">
                            <img src={Category} alt="" />
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
                    <div className="main-countdown">
                        <CountdownSmall />
                    </div>

                    <div className="collection-actions">
                        <div className="collection-actions_title">Current price</div>
                        <div className="collection-actions_current-price">
                            <div className="collection-actions_current-price_bnb">{priceBNB.toLocaleString()} BNB</div>
                            <div className="collection-actions_current-price_usd">${priceUSD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</div>
                        </div>
                        <div className="nft-buy-buttons-gropup">
                            <div className="nft-buy-button" onClick={handleBuyNFT}>
                                <img src={Basket} alt="" />
                                <span>Buy</span>
                            </div>
                            <div className="nft-drop-button" onClick={handleDropNFT}>
                                <span>Drop the rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nft-details-second">
                <div className="nft-details-second_left">
                    <div className="nft-details-second_left_header">
                        <img src={Description} alt="" />
                        <span>Description</span>
                    </div>
                    <div className="nft-details-second_left_description">
                        <div className="scroll-div">
                            <span>RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent.
                                <br />
                                <br />
                                To create a safe and convenient platform for everyone who
                            </span>
                        </div>
                    </div>
                    <Dropdown
                        menu={{ items }}
                        trigger={["click"]}
                        onOpenChange={onOpenChange}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <div className="dropdown-left">
                                    <img src={DetailsIcon} alt="" />
                                    <span>Details</span>
                                </div>
                                {openDropdown ? <img src={ArrowUp} alt="" /> : <img src={ArrowDown} alt="" />}
                            </Space>
                        </a>
                    </Dropdown>
                </div>
                <div className="nft-details-second_right">
                    <div className="nft-details-second_right_header">
                        <img src={PriceHistory} alt="" />
                        <span>Price History</span>
                    </div>
                    <div className="nft-details-second_right_description">
                        <div className="chart-content">
                            <div className="left-vertical">Volume (ETH)</div>
                            {[1, 2, 3, 4].map((item) => <div className="chart-content_item" key={item}>
                                <div className="chart-content_price">0.0</div>
                                <div className="chart-content_line"></div>
                                <div className="chart-content_price">0.0</div>
                            </div>)}
                            <div className="right-vertical">Average price<br />(ETH)</div>

                            <div className="chart">
                                <img src={ChartLine} alt="" className="line-image" />
                                <div className="chart-info">
                                    <div className="chart-info_header">0.00 ETH</div>
                                    <div className="chart-info_content">
                                        Avg. price: 0,000 ETH
                                        <br />
                                        Num. sales: 0
                                        <br />
                                        May 27 at 0:00 AM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default NFTDetails;
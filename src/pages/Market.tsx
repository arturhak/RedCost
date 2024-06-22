import React, {useState} from "react";
import {marketButtons} from "../constants/marketButtonsName";
import NFTitem from "../components/NFTItem";
import NFT1 from "../assets/nft/nft_1.svg";
import {useNavigate} from "react-router-dom";


function Market () {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleFilterMarket = (el:any,index:any) => {
        console.log("MARKET",el, index)
        setName(el.text)
        };

    const openNFTDetails = (id:any) => {
        console.log("event===>",id)
        navigate("./details")
    };


    return (
        <div className="market">
            <p className="airdrop-text">
                <span>Market NFT</span>
            </p>
            <div className="market-buttons-group">
                {marketButtons.map((el:any,index) =>{
                    return (
                        <div
                            className={el.text === name? "button-is-active": "market-button"}
                            key={index}
                            onClick={()=>handleFilterMarket(el,index)}
                        >
                           <span>{el.text}</span>
                        </div>
                    )
                })}
            </div>
            <div className="market-block1">
                <div className="offer-block__header">
                    <div className="line_1"></div>
                    <div className="security-component-title">title</div>
                    <div className="line_1"></div>
                </div>
                <div className="nft-group">
                    {[1,2,3,4].map((index) => {
                        return <NFTitem
                            key={index}
                            image={NFT1}
                            name="Name"
                            owners="owners"
                            ownwersCount={274}
                            percent={41}
                            houre={24}
                            price={1.56}
                            func={()=>openNFTDetails(index)}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Market;
import React, {useEffect, useState} from "react";
import {marketButtons} from "../constants/marketButtonsName";
import NFTitem from "../components/NFTItem";
import NFT1 from "../assets/nft/nft_1.svg";
import {useNavigate} from "react-router-dom";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NFTitemSmall from "../components/NFTItemSmall";
import {getNFT} from "../web3";


function Market () {
    const [name, setName] = useState("All");
    const [nftGroup, setNftGroup] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        getNFT().then((res:any)=> {
            setNftGroup(res)
        })
    },[])

    console.log("NFTTTTTTTTTTTT=>",nftGroup)

    const handleFilterMarket = (el:any,index:any) => {
        console.log("MARKET",el, index)
        setName(el.text)
        };

    const openNFTDetails = (id:any) => {
        console.log("event===>",id)
        navigate("./details")
    };

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 1000,
    };
    const settings1 = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 1000,
    };
    const AfroStyles = [
        {
            id: 1,
            title: "Model 1",
            description:
                "Wearing a crisp white shirt paired with perfectly fitted denim jeans and classic canvas",
            alt: "First Image",
            src: "https://images.unsplash.com/photo-1528991435120-e73e05a58897?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            title: "Model 2",
            description:
                "Elevate your style with this Ankara long sleeve shirt and trouser",
            alt: "Second Image",
            src: "https://images.unsplash.com/photo-1572495532056-8583af1cbae0?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            title: "Model 3",
            description: "Elevate your style with Ankara dresses.",
            alt: "Third Image",
            src: "https://images.unsplash.com/photo-1607823489283-1deb240f9e27?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fEFmcmljYW4lMjBmYXNoaW9ufGVufDB8fDB8fHww",
        },
        {
            id: 4,
            title: "Model 4",
            description: "An elegant monochromatic image of a female figure.",
            alt: "Forth Image",
            src: "https://images.unsplash.com/flagged/photo-1578907015404-bd0176fb3108?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEFmcmljYW4lMjBmYXNoaW9ufGVufDB8fDB8fHww",
        },
        {
            id: 5,
            title: "Model 5",
            description: "Stylish trendy afro france man in red hat & white outfit",
            alt: "Fifth Image",
            src: "https://images.unsplash.com/photo-1584530193960-b4eb6c87081c?auto=format&fit=crop&q=80&w=2824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 6,
            title: "Model 6",
            description: "African woman in a red dinner gown",
            alt: "Sixth Image",
            src: "https://images.unsplash.com/photo-1560457099-64cb8a5eb503?auto=format&fit=crop&q=80&w=2786&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 7,
            title: "Model 7",
            description: "Man in Suit",
            alt: "Seventh Image",
            src: "https://images.unsplash.com/photo-1530884698386-d42ad3199b1f?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

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
                    <div className="line_1 rotate"></div>
                </div>
                <div className="nft-group">
                        {nftGroup.map((element:any,index:any) => {
                            return <div className="nft-item-group"><NFTitem
                                key={index}
                                image={element.tokenURI}
                                name="Name"
                                owners="owners"
                                ownwersCount={274}
                                percent={41}
                                houre={24}
                                price={1.56}
                                func={()=>openNFTDetails(index)}
                            />
                            </div>
                        })}
                </div>
            </div>
{/*Small NFT`s*/}
            <div className="market-block1">
                <div className="offer-block__header">
                    <div className="line_1"></div>
                    <div className="security-component-title">title</div>
                    <div className="line_1 rotate"></div>
                </div>
                <div className="container-slider1">
                    <Slider {...settings1}>
                        {AfroStyles.map((index) => {
                            return <div><NFTitemSmall
                                key={index}
                                image={index.src}
                                name="Name"
                                authorName="@author name"
                                owners="Floor"
                                ownwersCount={274}
                                percent={41}
                                houre={24}
                                price={1.56}
                                func={()=>openNFTDetails(index)}
                            />
                            </div>
                        })}
                    </Slider>
                    <Slider {...settings1}>
                        {AfroStyles.map((index) => {
                            return <div><NFTitemSmall
                                key={index}
                                image={index.src}
                                name="Name"
                                authorName="@author name"
                                owners="Floor"
                                ownwersCount={274}
                                percent={41}
                                houre={24}
                                price={1.56}
                                func={()=>openNFTDetails(index)}
                            />
                            </div>
                        })}
                    </Slider>
                </div>
            </div>

            {/*<div className="market-block1">*/}
                {/*<div className="offer-block__header">*/}
                {/*    <div className="line_1"></div>*/}
                {/*    <div className="security-component-title">title</div>*/}
                {/*    <div className="line_1 rotate"></div>*/}
                {/*</div>*/}
                {/*<div className="container-slider1">*/}
                {/*    <Slider {...settings1}>*/}
                {/*        {AfroStyles.map((index) => {*/}
                {/*            return <NFTitemSmall*/}
                {/*                key={index}*/}
                {/*                image={index.src}*/}
                {/*                name="Name"*/}
                {/*                authorName="@author name"*/}
                {/*                owners="Floor"*/}
                {/*                ownwersCount={274}*/}
                {/*                percent={41}*/}
                {/*                houre={24}*/}
                {/*                price={1.56}*/}
                {/*                func={()=>openNFTDetails(index)}*/}
                {/*            />*/}
                {/*        })}*/}
                {/*    </Slider>*/}
                {/*</div>*/}
            {/*</div>*/}
{/*end Small NFT`s*/}

            <div className="market-block1">
                <div className="offer-block__header">
                    <div className="line_1"></div>
                    <div className="security-component-title">title</div>
                    <div className="line_1 rotate"></div>
                </div>
                <div className="container-slider">
                    <Slider {...settings}>
                        {AfroStyles.map((index) => {
                            return <div><NFTitem
                                key={index}
                                image={index.src}
                                name="Name"
                                owners="owners"
                                ownwersCount={274}
                                percent={41}
                                houre={24}
                                price={1.56}
                                func={()=>openNFTDetails(index)}
                            />
                            </div>
                        })}
                    </Slider>
                </div>
            </div>

            <div className="market-block1">
                <div className="offer-block__header">
                    <div className="line_1"></div>
                    <div className="security-component-title">title</div>
                    <div className="line_1 rotate"></div>
                </div>
                <div className="container-slider">
                    <Slider {...settings}>
                        {AfroStyles.map((index) => {
                            return <div><NFTitem
                                key={index}
                                image={index.src}
                                name="Name"
                                owners="owners"
                                ownwersCount={274}
                                percent={41}
                                houre={24}
                                price={1.56}
                                func={()=>openNFTDetails(index)}
                            />
                            </div>
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Market;
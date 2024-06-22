import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { navItems } from "../constants/navItems";
import { socialItems } from "../constants/socialItems";
import leftFill from "../assets/icons/left-fill.svg";
import close from "../assets/icons/close.svg";
import { useNavigate } from "react-router-dom";
import InlineSVG from 'react-inlinesvg';
import avatar from "../assets/icons/avatar.svg";



import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId
const projectId = 'YOUR_PROJECT_ID'

// 2. Set chains
const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create a metadata object
const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
    /*Required*/
    metadata,

    /*Optional*/
    enableEIP6963: true, // true by default
    enableInjected: true, // true by default
    enableCoinbase: true, // true by default
    rpcUrl: '...', // used for the Coinbase SDK
    defaultChainId: 1 // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
createWeb3Modal({
    ethersConfig,
    chains: [mainnet],
    projectId,
    enableAnalytics: true // Optional - defaults to your Cloud configuration
})


function WebHeader({ setProfitModalOpen, setIsWallet, isWallet }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const [onHover, setOnHover] = useState(false);
    const navigate = useNavigate()

    const openSocialGroup = () => {
        setIsOpen(!isOpen);
    };
    const openWalletConnetion = () => {
        setProfitModalOpen(true)
    };

    const handleClickNavItem = (index: any) => {
        switch (index) {
            case 0:
                navigate("./about")
                break;
            case 1:
                navigate("./discover")
                break;
            case 2:
                navigate("./airdrop")
                break;
            case 3:
                navigate("./investors")
                break;
            case 4:
                navigate("./contacts")
                break;

            default:
                navigate("./error")
        }
        console.log(`Click on ${index} and navigate ${index}`)
    }
    const handleMarket = () => {
        navigate("./market")
    }
    const handleClickSocialItem = (item: String) => {
        console.log(`Click on ${item} and navigate ${item}`)
    }
    const handleMouseMove = (e: any) => {
        const boundingRect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - boundingRect.left;
        const mouseY = e.clientY - boundingRect.top;
        const centerX = boundingRect.width / 8;
        const centerY = boundingRect.height / 2;
        const maxRotateX = 15; // Maximum rotation angle around X-axis
        const maxRotateY = 1; // Maximum rotation angle around Y-axis
        const perspective = 4000; // Perspective value

        const rotateX = ((mouseY - centerY) / centerY) * maxRotateX;
        const rotateY = ((mouseX - centerX) / centerX) * maxRotateY;

        e.currentTarget.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (e: any) => {
        e.currentTarget.style.transform = 'perspective(300px) rotateX(0deg) rotateY(0deg)';
    };

    return (
        <div className="web-header">
            <div className="logo"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => { navigate("./") }}
            >
                <img src={Logo} alt="logo" />
            </div>
            <div className={!isOpen ? "navbar" : "navbar hide-nav"}>
                {navItems.map((item: String, index: any) => {
                    return <div className="navbar-item" key={index} onClick={() => handleClickNavItem(index)}>{item}</div>
                })}

            </div>
            <div className={!isOpen ? "navbar-item-market_nft" : "navbar-item-market_nft hide-nav"} onClick={handleMarket}>Market NFT</div>

            <div className="web-header-group-items">
                <div className="login">

                    {!isOpen ?
                        <img src={leftFill} alt="leftFill" className="social-group-logo-img" onClick={openSocialGroup} /> :
                        <img src={close} alt="leftFill" className="social-group-logo-img" onClick={openSocialGroup} />
                    }
                    <div className={!isOpen ? "social-group-logo" : "social-group-logo open"}>
                        {socialItems.map((socialItem: any, index) => {
                            return <div
                                key={index}
                                onClick={() => handleClickSocialItem(socialItem.name)}
                            >
                                <div className="svg-container">
                                    {socialItem.logosvg}
                                    {socialItem.logosvgred}
                                </div>
                            </div>
                        })}
                    </div>
                    {isWallet ?
                        <div onClick={() => console.log("show dropdown")} className="login-button-connected-web">
                            <img src={avatar} alt="avatar" style={{ cursor: "pointer" }} />
                        </div> : <w3m-button />
                        // <div className="login-button" onClick={openWalletConnetion}>Login</div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default WebHeader;
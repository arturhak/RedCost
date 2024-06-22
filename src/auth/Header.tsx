import React, {useState} from "react";
import WebHeader from "./WebHeader";
import MobileHeader from "./MobileHeader";
import {Input, Modal} from "antd";
import PopupLogo from "../assets/popup-logo.svg";
import Metamask from "../assets/metamask.svg";
import Coinbase from "../assets/coinbase.svg";
import WalletConnect from "../assets/wallet-connect.svg";
import { RightOutlined } from '@ant-design/icons';
// import {useWeb3React} from "@web3-react/core";
// import { connectors } from "./connectors";


function Header() {
    const [profitModalOpen, setProfitModalOpen] = useState(false);
    const [isWallet, setIsWallet] = useState(false);

    // const { activate }:any = useWeb3React();
    const setProvider = (type:any) => {
        window.localStorage.setItem("provider", type);
    };


    const handleInputClick = () => {
        console.log("handleInputClick")
    }


    return (
        <div className='header'>
            <WebHeader
                setProfitModalOpen={setProfitModalOpen}
                isWallet={isWallet}
                setIsWallet={setIsWallet}
            />
            <MobileHeader
                setProfitModalOpen={setProfitModalOpen}
                isWallet={isWallet}
                setIsWallet={setIsWallet}
            />

            {/*Connection Modal*/}

            <Modal
                centered
                width={480}
                open={profitModalOpen}
                onCancel={() => setProfitModalOpen(false)}
                footer={null}
                className="mini-popup"
            >
                <img src={PopupLogo} alt=""/>
                <div className="title">Connect to RedCost</div>
                <Input size="large" placeholder="Continue with email" suffix={<RightOutlined onClick={handleInputClick}/>} />
                <div className="security-component-header mt-30">
                    <div className="line_2"></div>
                    <div className="security-component-title">or</div>
                    <div className="line_2 rotate"></div>
                </div>
                <div className="connections">
                    <div className="connections_item" onClick={()=>{
                        // activate(connectors.injected);
                        setProvider("injected");
                        setProfitModalOpen(false)
                    }}>
                        <img src={Metamask} alt=""/>
                        <span>MetaMask</span>
                    </div>
                    <div className="connections_item borders">
                        <img src={Coinbase} alt=""/>
                        <span>Coinbase Wallet</span>
                    </div>
                    <div className="connections_item">
                        <img src={WalletConnect} alt=""/>
                        <span>Wallet Connect</span>
                    </div>
                </div>
                <div className="more-wallets">More wallet options</div>


            </Modal>

        </div>
    )
}

export default Header;

import React, {useState} from "react";
import WebHeader from "./WebHeader";
import MobileHeader from "./MobileHeader";
import { Modal } from "antd";

function Header() {
    const [profitModalOpen, setProfitModalOpen] = useState(false);
    const [isWallet, setIsWallet] = useState(false);


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
                width={469}
                open={profitModalOpen}
                onCancel={() => setProfitModalOpen(false)}
                footer={null}
                className="mini-popup"
            >

                <div>hgjkjkj</div>
                <div>hgjkjkj</div>
                <div>hgjkjkj</div>
                <div>hgjkjkj</div>
                <div>hgjkjkj</div>


            </Modal>

        </div>
    )
}

export default Header;

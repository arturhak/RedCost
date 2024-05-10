import React, {useState} from "react";
import WebHeader from "./WebHeader";
import MobileHeader from "./MobileHeader";
import { Modal } from "antd";

function Header() {
    const [profitModalOpen, setProfitModalOpen] = useState(false);

    return (
        <div className='header'>
            <WebHeader />
            {/*<MobileHeader />*/}

            {/*Connection Modal*/}
            <Modal
                centered
                width={1000}
                open={profitModalOpen}
                onCancel={() => setProfitModalOpen(false)}
                footer={null}
                className="mini-popup"
            >
                    Connect Wallet
            </Modal>

        </div>
    )
}

export default Header;

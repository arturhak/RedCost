import React, { useState } from "react";
import {Modal} from "antd";

function AuthLayout () {
    const [modalOpen, setModalOpen] = useState(false);


    return (
        <div className="auth-layouth">
            AUTH LAYOUTH
            <Modal
                centered
                open={modalOpen}
                footer={null}
                width={1700}
                onCancel={() => setModalOpen(false)}
                className="step-modal"
            >
                Connext Wallet
            </Modal>
        </div>
    )
}

export default AuthLayout;

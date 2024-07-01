import React, {useState} from "react";
import {Drawer} from 'antd';

function MobileHeader(props: any) {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
const headerData = [
        {
            icon: "LamaLogo",
            header: "Profit"
        },
        {
            icon: "Coctail",
            header: "Cocktails"
        },
        {
            icon: "BNB2",
            header: "Balance"
        },
        {
            icon: "Statistic",
            header: "Statistic"
        },
    ]
    return (
        <div className="mobile-header">
            <div className="burger" onClick={showDrawer}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
            <Drawer
                placement="left"
                onClose={onClose}
                open={open}
                className="drower-el"
            >
                <div className="balance-group mob-balance-group">
                    <div className="balance-mobie" onClick={() => {
                        props.openActions(headerData[0].header)
                        setOpen(false)
                    }}>
                        <img src={headerData[0].icon} alt="logo"/>
                        <div className="balance-content">
                            <div className="balance-content-header">
                                {headerData[0].header}
                            </div>
                            <div className="balance-content-amount">
                                {Number(props.data?.balanceOfCoin)}
                            </div>
                        </div>
                    </div>
                    <div className="balance-mobie" onClick={() => {
                        props.openActions(headerData[1].header)
                        setOpen(false)
                    }}>
                        <img src={headerData[1].icon} alt="logo"/>
                        <div className="balance-content">
                            <div className="balance-content-header">
                                {headerData[1].header}
                            </div>
                            <div className="balance-content-amount">
                                {Number(props.data?.balanceOfCocktail)}
                            </div>
                        </div>
                    </div>
                    <div className="balance-mobie" onClick={() => {
                        props.openActions(headerData[2].header)
                        setOpen(false)
                    }}>
                        <img src={headerData[2].icon} alt="logo"/>
                        <div className="balance-content">
                            <div className="balance-content-header">
                                {headerData[2].header}
                            </div>
                            <div className="balance-content-amount">
                               fsgdhjhdh
                            </div>
                        </div>
                    </div>
                </div>


                <div onClick={() => {
                    props.openActions("Statistic");
                    setOpen(false)
                }} style={{marginBottom: "24px"}}>

                </div>

            </Drawer>
            <div className="mobile-header-content">
                <div className="logo">
                    <img src={"Logo"} alt="" onClick={()=>console.log("OK")}/>
                </div>

            </div>
        </div>
    )
}

export default MobileHeader;

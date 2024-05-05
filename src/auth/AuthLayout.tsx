import React, {useState} from "react";
import Countdown from "react-countdown";
import MainComponent from "../components/MainComponent";
import RedCost from "../assets/images/red-cost.svg"


function AuthLayout () {
    const [countdown, setCountdown] = useState<any>(Date.now());

    const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
        if (completed) {
            // Render a complete state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <div className="datetime-container">
                    <div className="datetime-content">
                        <div className="datetime-text">DAYS</div>
                        <div className="datetime-number">{days}</div>
                    </div>
                    <div className="datetime-content">
                        <div className="datetime-text">HOURSE</div>
                        <div className="datetime-number">{hours}</div>
                    </div>
                    <div className="datetime-content">
                        <div className="datetime-text">MINUTES</div>
                        <div className="datetime-number">{minutes}</div>
                    </div>
                    <div className="datetime-content">
                        <div className="datetime-text">SECONDS</div>
                        <div className="datetime-number">{seconds}</div>
                    </div>
                </div>
            );
        }
    };

    const Completionist = () => {
        return (
            <>
                OK
            </>
        );
    };

    return (
        <div className="auth-layouth">

            <div className="digital-art">
                <div className="header-side">
                    Enter The New World<br/>of Digital Art
                </div>
                <div className="bottom-side">
                    <div className="bottom-side-left">
                        <div className="bottom-side-left-header">
                            The marketplace for those who know<br/>the true value of digital assets.
                        </div>
                        <div className="bottom-side-left-header_buttons">
                            <div className="left-button">Explore now</div>
                            <div className="right-button">AirDrop</div>
                        </div>
                    </div>
                    <div>
                        {countdown && (
                            <Countdown date={Date.now() + 600000000} renderer={renderer} />
                        )}
                    </div>
                </div>
            </div>
            <MainComponent
                image={RedCost}
                title={true}
                titleText="ABOUT"
                subtitle="RED COST"
                content1={"RED COST is the official marketplace for valuing, buying and selling digital assets (NFT). Complies with all current cryptocurrency security requirements. All transactions are legal and transparent."}
                content2={"To create a safe and convenient platform for everyone who understands the topic and wants to earn safely on NFT."}
                reverse={false}
                buttonSize={true}
                isInput={false}
            />

        </div>
    )
}

export default AuthLayout;

import React from 'react';
import './RoadmapWebJoin.scss';
import Roadmap2Image from "../assets/roadmap-2-image.svg";
import BottomImage from "../assets/roadmap-bottom-svg.svg";
import ArrowUp from "../assets/icons/arrow-up.svg";
import RoadmapDot from "../assets/icons/roadmap-dot.svg"

type RoadmapItem = {
    title: string;
    description: string;
    date: string;
    icon: string;
};

const roadmapItems: RoadmapItem[] = [
    { title: 'Title', description: 'Your NFTs are stored in a digital wallet.', date: '01/2024', icon: Roadmap2Image },
    { title: 'Title', description: 'Your NFTs are stored in a digital wallet.', date: '02/2024', icon: Roadmap2Image },
    { title: 'Title', description: 'Your NFTs are stored in a digital wallet.', date: '03/2024', icon: Roadmap2Image },
    { title: 'Title', description: 'Your NFTs are stored in a digital wallet.', date: '04/2024', icon: Roadmap2Image },
];

const RoadmapWebJoin = () => {

    const handleJoin = () => {
        console.log("Join")
    }
    return (
        <div className="roadmap2">
            <div className="roadmap2-title-group">
                <div className="roadmap2-title-group_line-title">
                    <div className="roadmap2-line-width"></div>
                    <div className="roadmap2-title">check our</div>
                </div>
                <div className="roadmap2-subtitle">Roadmap</div>
            </div>
            <div className="roadmap2-lines">
                <div className="roadmap2-lines__first">
                    <img src={RoadmapDot} alt=""/>
                </div>
                <div className="roadmap2-lines__second">
                    <img src={RoadmapDot} alt=""/>
                </div>
            </div>
            <div className="roadmap2-container">
                <div className="short-line"></div>
                {roadmapItems.map((item, index) => (
                    <div key={index} className="roadmap2-item">
                        <div className="roadmap2-content">
                            <img src={item.icon} alt="icon" className="roadmap2-icon" />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <span className="date">{item.date}</span>
                            <img src={BottomImage} alt="" className="image"/>
                        </div>
                    </div>
                ))}
                <div className="join-item">
                    <div className="roadmap2-content join">
                        <button onClick={handleJoin}>Join</button>
                        <img src={ArrowUp} alt=""/>
                        <p>Enter the new world of digital art</p>
                    </div>
                </div>
            </div>
            <div className="roadmap2-lines">
                <div className="roadmap2-lines__third">
                    <img src={RoadmapDot} alt=""/>
                </div>
                <div className="roadmap2-lines__forth">
                    <img src={RoadmapDot} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default RoadmapWebJoin;

import React from "react";

function NFTitemSmall (props:any) {

    return (
        <div className="nft-item-small">
            <div className="nft-item-small-picture">
                <img src={props.image} alt=""/>
            </div>
            <div className="nft-item-small_details">
                <div className="nft-item-small_details__title-group">
                    <div className="nft-item-small_details__title-group__title">{props.name}</div>
                    <div className="nft-item-small_details__title-group__authorname">{props.authorName}</div>
                    <div className="nft-item-small_details__title-group__owner-name">{props.ownerName}</div>
                </div>
                <div className="nft-item-small_details__content">
                    <div className="nft-item-small_details__content___item">
                        <div className="nft-item-small_details__content___item____top">{props.owners}</div>
                        <div className="nft-item-small_details__content___item____bottom">{props.ownwersCount} {props.percent}%</div>
                    </div>
                    <div className="nft-item-small_details__content___item">
                        <div className="nft-item_details__content___item____top">{props.houre}H VOLUME</div>
                        <div className="nft-item-small_details__content___item____bottom">{props.price}ETH</div>
                    </div>
                </div>
                <div className="make-offer-small-button" onClick={props.func}>Make offer</div>

            </div>
        </div>
    )
}

export default NFTitemSmall;
import React from "react";
const Card = (props) => {
    let cardBadge;
    if (props.card.openSpots === 0) {
        cardBadge = "SOLD OUT"
    } else if (props.card.location === "Online") {
        cardBadge = "Online"
    }
    return (
        <section className="single-card">
            {cardBadge && <div className="card--badge">{cardBadge}</div>}
            <img src={process.env.PUBLIC_URL + '/images/' + props.card.coverImg} className="card-1"></img>
            <div className="card-content">
                <img src={process.env.PUBLIC_URL + `/images/Star 1.png`} className="star" />
                <span> {props.card.stats.rating}</span>
                <span className="gray"> ({props.card.stats.reviewCount})-{props.card.location}</span>
                <p>{props.card.title}
                </p>
                <p><span className="bold">From ${props.card.price}</span> /person</p>
            </div>
        </section >
    )
}

export default Card 
import React from 'react';
export default function Card(props){
    let badgeText
    if(props.openSpots==0) badgeText="SOLD OUT";
    else if(props.country=="Online") badgeText="ONLINE";
    return(
        <section className='Card'>
            {badgeText && <span className='badge'>{badgeText}</span>}
            <img className="Card-image" src={props.item.coverImg} width={300} />
            <div className='Card-stats'>
                <img className="star" src="images/star.png" width={20} />
                <span className='rating'>{props.item.stats.rating}</span>
                <span className='likes'>({props.item.stats.reviewCount})..</span>
                <span className='country'>{props.item.location}</span>
            </div>
            <p className='Card-title bold'>{props.item.title}</p>
            <p className='message'>{props.item.description}</p>
            <p className='bold'>From ${props.item.price}</p>
        </section>
    )
}
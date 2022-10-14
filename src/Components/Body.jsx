import React from 'react';

export default function Body(
    {img, googleMapsUrl, loc, title, 
    description, startDate, endDate}) {

    return (
            <div className='body'>
                <div className='my-img'>
                    <img src={img} alt='an_img' className='img'/>
                </div>
                
                <div className='contents'>
                    <span className='location'>
                        <i className="fa fa-map-marker"/>
                        <h4>{loc}</h4>
                        <a href={googleMapsUrl}>View on Google Maps</a>
                    </span>
                    <h1>{title}</h1>
                    <h5>{startDate} - {endDate}</h5>
                    <p>{description}</p>
                </div>
                
            </div>   
                
    )

}
